'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Upload, Loader2, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import { importStudents } from '@/app/(dashboard)/students/actions'

export function ImportStudentsModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [csvData, setCsvData] = useState('')
    const [parsedData, setParsedData] = useState<any[]>([])
    const [isPreviewing, setIsPreviewing] = useState(false)
    const [isImporting, setIsImporting] = useState(false)
    const [importResult, setImportResult] = useState<any>(null)

    const parseCSV = (text: string) => {
        const lines = text.trim().split('\n')
        if (lines.length < 2) return []

        // Simple CSV parser handling quoted values
        const parseLine = (line: string) => {
            const result = []
            let current = ''
            let inQuotes = false

            for (let i = 0; i < line.length; i++) {
                const char = line[i]
                if (char === '"') {
                    inQuotes = !inQuotes
                } else if (char === ',' && !inQuotes) {
                    result.push(current.trim())
                    current = ''
                } else {
                    current += char
                }
            }
            result.push(current.trim())
            return result
        }

        const headers = parseLine(lines[0])

        return lines.slice(1).map(line => {
            const values = parseLine(line)
            const obj: any = {}
            headers.forEach((header, index) => {
                obj[header] = values[index]?.replace(/^"|"$/g, '') // Remove surrounding quotes
            })
            return obj
        })
    }

    const handlePreview = () => {
        const data = parseCSV(csvData)
        setParsedData(data)
        setIsPreviewing(true)
    }

    const handleImport = async () => {
        setIsImporting(true)
        try {
            const result = await importStudents(parsedData)
            setImportResult(result)
            if (result.success > 0) {
                // Clear form on success
                setCsvData('')
                setParsedData([])
            }
        } catch (error) {
            console.error('Import failed:', error)
        } finally {
            setIsImporting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Import CSV
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Import Students</DialogTitle>
                </DialogHeader>

                {!isPreviewing ? (
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Paste your CSV data below. The first line must be the header.
                            <br />
                            Supported columns: <code>Nama, Nama Panggilan, Usia, Pekerjaan, No. telpon, Package, Jadwal, Sesi ke-</code>
                        </p>
                        <Textarea
                            placeholder="Nama,Nama Panggilan,Usia,Pekerjaan,No. telpon,Package,Jadwal...&#10;John Doe,John,25,Engineer,08123456,Basic English,Mon 20:00..."
                            className="min-h-[200px] font-mono text-xs"
                            value={csvData}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCsvData(e.target.value)}
                        />
                        <Button onClick={handlePreview} disabled={!csvData.trim()} className="w-full">
                            Preview Data
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {importResult ? (
                            <div className={`p-4 rounded-lg border ${importResult.failed === 0 ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    {importResult.failed === 0 ? (
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                    ) : (
                                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                                    )}
                                    <h3 className="font-semibold">Import Complete</h3>
                                </div>
                                <p className="text-sm">
                                    Successfully imported: <strong>{importResult.success}</strong>
                                    <br />
                                    Failed: <strong>{importResult.failed}</strong>
                                </p>
                                {importResult.errors.length > 0 && (
                                    <div className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded max-h-32 overflow-y-auto">
                                        {importResult.errors.map((e: string, i: number) => (
                                            <div key={i}>{e}</div>
                                        ))}
                                    </div>
                                )}
                                <Button onClick={() => { setIsPreviewing(false); setImportResult(null); setIsOpen(false) }} className="w-full mt-4">
                                    Done
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="rounded-md border">
                                    <div className="bg-muted/50 p-2 border-b text-xs font-medium">
                                        Preview ({parsedData.length} records)
                                    </div>
                                    <div className="max-h-[300px] overflow-y-auto p-2 space-y-2">
                                        {parsedData.map((row, i) => (
                                            <div key={i} className="text-xs p-2 bg-card rounded border flex justify-between items-center">
                                                <div>
                                                    <span className="font-semibold">{row.Nama}</span>
                                                    <span className="text-muted-foreground mx-2">•</span>
                                                    <span>{row.Package || 'No Package'}</span>
                                                </div>
                                                <div className="text-muted-foreground">
                                                    {row.Jadwal}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => setIsPreviewing(false)} className="flex-1">
                                        Back
                                    </Button>
                                    <Button onClick={handleImport} disabled={isImporting} className="flex-1">
                                        {isImporting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Importing...
                                            </>
                                        ) : (
                                            'Import Now'
                                        )}
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
