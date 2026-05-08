import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, hoverEffect = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass-card rounded-2xl transition-all duration-300",
                    hoverEffect && "hover:scale-[1.02] hover:shadow-premium-hover cursor-pointer",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        )
    }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
