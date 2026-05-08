import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
    icon: LucideIcon
    title: string
    description: string
    actionLabel?: string
    onAction?: () => void
    className?: string
}

export function EmptyState({
    icon: Icon,
    title,
    description,
    actionLabel,
    onAction,
    className,
}: EmptyStateProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center h-64 text-center p-8 animate-in fade-in zoom-in-95 duration-500", className)}>
            <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <Icon className="h-8 w-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-sm text-slate-500 max-w-xs mb-6">{description}</p>
            {actionLabel && onAction && (
                <Button onClick={onAction} variant="outline">
                    {actionLabel}
                </Button>
            )}
        </div>
    )
}
