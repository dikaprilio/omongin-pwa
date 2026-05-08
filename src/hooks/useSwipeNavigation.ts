import { useCallback, useRef } from 'react';

export function useSwipeNavigation(onNext: () => void, onPrev: () => void) {
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);

    const onTouchStart = useCallback((e: React.TouchEvent) => {
        const touch = e.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    }, []);

    const onTouchEnd = useCallback((e: React.TouchEvent) => {
        if (!touchStartRef.current) return;

        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStartRef.current.x;
        const deltaY = touch.clientY - touchStartRef.current.y;
        const swipeThreshold = 50;

        // Only trigger if horizontal swipe is dominant
        if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
            if (deltaX > 0) {
                // Swipe right -> previous
                onPrev();
            } else {
                // Swipe left -> next
                onNext();
            }
        }

        touchStartRef.current = null;
    }, [onNext, onPrev]);

    return { onTouchStart, onTouchEnd };
}
