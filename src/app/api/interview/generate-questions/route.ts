import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

interface InterviewContext {
    role?: string
    industry?: string
    experience?: string
}

export async function POST(request: NextRequest) {
    try {
        console.log('[generate-questions] Received request')
        const body = await request.json()
        console.log('[generate-questions] Request body:', { cvTextLength: body.cvText?.length, hasContext: !!body.context })
        
        const { cvText, context } = body as { cvText: string, context?: InterviewContext }

        if (!cvText || cvText.length < 50) {
            console.log('[generate-questions] Invalid CV text:', cvText?.length)
            return NextResponse.json({ error: 'Invalid CV text' }, { status: 400 })
        }

        if (!process.env.GEMINI_API_KEY) {
            console.log('[generate-questions] Missing GEMINI_API_KEY')
            return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
        }
        console.log('[generate-questions] API key present, length:', process.env.GEMINI_API_KEY.length)

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
        const model = genAI.getGenerativeModel({ model: 'gemma-3-27b-it' })

        // Build context string for tailored questions
        const contextInfo = context ? `
INTERVIEW CONTEXT:
- Target Role: ${context.role || 'General'}
- Industry: ${context.industry || 'General'}
- Experience Level: ${context.experience || 'Mid-level'}

Tailor questions specifically for this ${context.experience || 'mid-level'} ${context.role || 'position'} in the ${context.industry || 'general'} industry.
` : ''

        const prompt = `You are a professional HR interviewer. Based on this CV/Resume and interview context, generate exactly 10 interview questions.

CV CONTENT:
${cvText.slice(0, 4000)}
${contextInfo}
REQUIREMENTS:
1. Generate exactly 10 questions
2. Mix of types:
   - 2 behavioral questions (STAR method)
   - 3 technical/skill-based questions (based on CV skills)
   - 2 situational questions
   - 2 questions about their experience/projects mentioned
   - 1 motivation/career goals question
3. Questions should be specific to THIS candidate's background AND the target role/industry
4. Adjust difficulty based on experience level (${context?.experience || 'mid'})
5. Order from easier to harder

RESPOND IN THIS EXACT JSON FORMAT ONLY:
{
  "questions": [
    {"id": 1, "text": "Question text here", "category": "behavioral"},
    {"id": 2, "text": "Question text here", "category": "technical"},
    ...
  ]
}

JSON ONLY, no markdown, no explanation.`

        console.log('[generate-questions] Calling Gemini API...')
        const result = await model.generateContent(prompt)
        const responseText = result.response.text()
        console.log('[generate-questions] Gemini response length:', responseText.length)

        // Clean and parse JSON
        const cleanedJson = responseText
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim()

        const parsed = JSON.parse(cleanedJson)
        console.log('[generate-questions] Parsed questions count:', parsed.questions?.length)

        if (!parsed.questions || !Array.isArray(parsed.questions) || parsed.questions.length !== 10) {
            throw new Error('Invalid question format')
        }

        return NextResponse.json({ questions: parsed.questions })

    } catch (error: any) {
        console.error('[generate-questions] Error:', error?.message || error)
        const errorMessage = error?.message || String(error) || 'Unknown error'
        return NextResponse.json({ 
            error: 'Failed to generate questions',
            details: errorMessage 
        }, { status: 500 })
    }
}
