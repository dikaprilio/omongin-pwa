import { useState, useEffect } from 'react'

export function useMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        // Check initially
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint)
        }

        // Set initial value
        checkMobile()

        // Listen for resize events
        window.addEventListener('resize', checkMobile)

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile)
    }, [breakpoint])

    return isMobile
}
