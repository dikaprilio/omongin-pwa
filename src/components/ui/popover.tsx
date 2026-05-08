'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface PopoverProps {
    children: React.ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

const PopoverContext = React.createContext<{
    open: boolean
    onOpenChange: (open: boolean) => void
}>({
    open: false,
    onOpenChange: () => { },
})

export function Popover({ children, open, onOpenChange }: PopoverProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleOpenChange = (newOpen: boolean) => {
        setIsOpen(newOpen)
        onOpenChange?.(newOpen)
    }

    // Sync with controlled prop
    React.useEffect(() => {
        if (open !== undefined) {
            setIsOpen(open)
        }
    }, [open])

    return (
        <PopoverContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
            <div className="relative inline-block text-left w-full">
                {children}
            </div>
        </PopoverContext.Provider>
    )
}

export function PopoverTrigger({ children, asChild }: { children: React.ReactNode, asChild?: boolean }) {
    const { open, onOpenChange } = React.useContext(PopoverContext)

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onClick: (e: React.MouseEvent) => {
                (children as React.ReactElement<any>).props.onClick?.(e)
                onOpenChange(!open)
            },
        })
    }

    return (
        <button onClick={() => onOpenChange(!open)}>
            {children}
        </button>
    )
}

export function PopoverContent({ children, className, align = 'center' }: { children: React.ReactNode, className?: string, align?: 'start' | 'center' | 'end' }) {
    const { open, onOpenChange } = React.useContext(PopoverContext)
    const ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                // Check if click was on trigger (to avoid double toggle) - simplified for now
                // Ideally we'd check if the click target is inside the trigger
                onOpenChange(false)
            }
        }

        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open, onOpenChange])

    if (!open) return null

    return (
        <div
            ref={ref}
            className={cn(
                "absolute z-50 mt-2 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95",
                align === 'start' && "left-0",
                align === 'end' && "right-0",
                align === 'center' && "left-1/2 -translate-x-1/2",
                className
            )}
        >
            {children}
        </div>
    )
}
