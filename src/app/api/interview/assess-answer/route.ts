import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { createClient } from '@/utils/supabase/server'
import { isAdmin } from '@/lib/auth/roles'

export async function POST(request: NextRequest) {
    try {
        const { question, answer, pronunciationData } = await request.json()

        if (!question || !answer) {
            return NextResponse.json({ error: 'Missing question or answer' }, { status: 400 })
        }

        // Server-side verification of "Paid User" status
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        let isPaidUser = false
        if (user) {
            const admin = await isAdmin()
            if (admin) {
                isPaidUser = true
            } else {
                // Check for active subscription
                const { data: sub } = await supabase
                    .from('subscriptions')
                    .select('status')
                    .eq('user_id', user.id)
                    .eq('status', 'active')
                    .single()

                if (sub) {
                    isPaidUser = true
                }
            }
        }
        // Note: Free users (or unauthenticated) get the free prompt.

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
        const model = genAI.getGenerativeModel({ model: 'gemma-3-27b-it' })

        // Different prompts based on user tier
        const basePrompt = `You are an expert job interview coach. Assess this interview answer.

QUESTION: "${question}"

CANDIDATE'S ANSWER: "${answer}"
`

        const freePrompt = basePrompt + `
Provide a brief assessment.

RESPOND IN THIS EXACT JSON FORMAT:
{
  "score": <number 1-100>,
  "feedback": "<1-2 sentences of feedback in Indonesian, casual tone>",
  "strengths": ["<strength 1>"],
  "improvements": ["<improvement 1>"]
}

JSON ONLY.`

        const paidPrompt = basePrompt + `
${pronunciationData ? `
PRONUNCIATION DATA:
- Accuracy: ${pronunciationData.accuracyScore}/100
- Fluency: ${pronunciationData.fluencyScore}/100
- Problem words: ${pronunciationData.problemWords?.join(', ') || 'None'}
` : ''}

Provide a comprehensive assessment including communication skills.

RESPOND IN THIS EXACT JSON FORMAT:
{
  "score": <number 1-100>,
  "contentScore": <number 1-100>,
  "communicationScore": <number 1-100>,
  "feedback": "<2-3 sentences of detailed feedback in Indonesian>",
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<improvement 1>", "<improvement 2>"],
  "suggestedAnswer": "<A model answer example - 2-3 sentences>",
  "pronunciationTips": "<If voice was used, specific pronunciation advice>"
}

JSON ONLY.`

        const prompt = isPaidUser ? paidPrompt : freePrompt

        const result = await model.generateContent(prompt)
        const responseText = result.response.text()

        // Clean and parse JSON
        const cleanedJson = responseText
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim()

        const assessment = JSON.parse(cleanedJson)

        return NextResponse.json({ assessment })

    } catch (error: any) {
        console.error('[assess-answer] Error:', error?.message || error)
        return NextResponse.json({ 
            error: 'Failed to assess answer',
            details: error?.message || String(error)
        }, { status: 500 })
    }
}
