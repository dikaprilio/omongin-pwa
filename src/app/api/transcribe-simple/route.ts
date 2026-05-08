import { NextRequest, NextResponse } from 'next/server'

// Simple transcription API using Groq Whisper
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const audioFile = formData.get('audio') as File

        if (!audioFile) {
            return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
        }

        // Convert File to blob/buffer for Groq API
        const audioBuffer = await audioFile.arrayBuffer()
        const audioBlob = new Blob([audioBuffer], { type: audioFile.type || 'audio/wav' })

        // Prepare form data for Groq Whisper API
        const groqFormData = new FormData()
        groqFormData.append('file', audioBlob, 'audio.wav')
        groqFormData.append('model', 'whisper-large-v3')
        groqFormData.append('language', 'en')
        groqFormData.append('response_format', 'json')

        // Call Groq Whisper API
        const res = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: groqFormData
        })

        if (!res.ok) {
            const errorText = await res.text()
            console.error('Groq API error:', errorText)
            return NextResponse.json({ error: 'Transcription failed' }, { status: 500 })
        }

        const data = await res.json()
        return NextResponse.json({ text: data.text || '' })

    } catch (error) {
        console.error('Transcription error:', error)
        return NextResponse.json({ error: 'Failed to transcribe audio' }, { status: 500 })
    }
}
