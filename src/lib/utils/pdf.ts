export interface PDFParseResult {
    text: string
    pages: number
}

export async function extractTextFromPDF(file: File): Promise<PDFParseResult> {
    // Use pdfjs-dist/legacy/build/pdf for compatibility without worker
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs')

    // Set worker to false/empty to run in main thread
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/legacy/build/pdf.worker.mjs',
        import.meta.url
    ).toString()

    const arrayBuffer = await file.arrayBuffer()
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

    let fullText = ''

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const textContent = await page.getTextContent()
        const pageText = textContent.items
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((item: any) => item.str)
            .join(' ')
        fullText += pageText + '\n'
    }

    return {
        text: fullText.trim(),
        pages: pdf.numPages,
    }
}
