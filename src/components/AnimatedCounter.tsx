'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
    value: number
    duration?: number
    delay?: number
    className?: string
}

export function AnimatedCounter({ value, duration = 1000, delay = 0, className = '' }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        // Intersection Observer for viewport detection
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        const startTime = Date.now() + delay
        const endValue = value

        const animate = () => {
            const now = Date.now()
            if (now < startTime) {
                requestAnimationFrame(animate)
                return
            }

            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3)

            setCount(Math.floor(easeOut * endValue))

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [hasStarted, value, duration, delay])

    return (
        <span ref={ref} className={className}>
            {count}
        </span>
    )
}
