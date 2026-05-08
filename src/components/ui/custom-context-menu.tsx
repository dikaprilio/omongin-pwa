'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface ContextMenuItem {
    label: string
    icon?: React.ReactNode
    onClick: () => void
    className?: string
    shortcut?: string
}

interface CustomContextMenuProps {
    children: React.ReactNode
    items: ContextMenuItem[]
    className?: string
    as?: React.ElementType
}

export function CustomContextMenu({ children, items, className, as: Component = 'div' }: CustomContextMenuProps) {
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setVisible(false)
            }
        }

        const handleScroll = () => {
            if (visible) setVisible(false)
        }

        document.addEventListener('click', handleClickOutside)
        window.addEventListener('scroll', handleScroll, true)
        return () => {
            document.removeEventListener('click', handleClickOutside)
            window.removeEventListener('scroll', handleScroll, true)
        }
    }, [visible])

    useEffect(() => {
        const handleCloseMenu = () => setVisible(false)
        window.addEventListener('close-context-menus', handleCloseMenu)
        return () => window.removeEventListener('close-context-menus', handleCloseMenu)
    }, [])

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation() // Prevent parent context menus

        // Close other menus
        window.dispatchEvent(new Event('close-context-menus'))

        // Calculate position to keep within viewport
        let x = e.clientX
        let y = e.clientY

        // Simple adjustment (can be improved)
        if (x + 200 > window.innerWidth) x = window.innerWidth - 210
        if (y + items.length * 40 > window.innerHeight) y = window.innerHeight - items.length * 40

        setPosition({ x, y })
        setVisible(true)
    }

    return (
        <Component onContextMenu={handleContextMenu} className={className}>
            {children}
            {visible && createPortal(
                <AnimatePresence>
                    {visible && (
                        <motion.div
                            ref={menuRef}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                            style={{ top: position.y, left: position.x }}
                            className="fixed z-50 min-w-[180px] bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-xl shadow-premium p-1.5 overflow-hidden"
                        >
                            {items.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        item.onClick()
                                        setVisible(false)
                                    }}
                                    className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-lg transition-colors hover:bg-slate-100/80 ${item.className || 'text-slate-700'}`}
                                >
                                    {item.icon && <span className="w-4 h-4 flex items-center justify-center">{item.icon}</span>}
                                    <span className="flex-1 text-left font-medium">{item.label}</span>
                                    {item.shortcut && <span className="text-[10px] text-slate-400 ml-2">{item.shortcut}</span>}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </Component>
    )
}
