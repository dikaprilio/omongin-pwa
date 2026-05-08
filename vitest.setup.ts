import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock next/navigation
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        refresh: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        prefetch: vi.fn(),
    }),
    useSearchParams: () => ({
        get: vi.fn(),
        getAll: vi.fn(),
        has: vi.fn(),
        entries: vi.fn(),
        keys: vi.fn(),
        values: vi.fn(),
        toString: vi.fn(),
    }),
    usePathname: () => '/',
    redirect: vi.fn(),
    permanentRedirect: vi.fn(),
}))

// Mock next/headers
vi.mock('next/headers', () => ({
    cookies: vi.fn(() => ({
        get: vi.fn(),
        set: vi.fn(),
        delete: vi.fn(),
        getAll: vi.fn(() => []),
    })),
    headers: vi.fn(() => ({
        get: vi.fn(),
    })),
}))

// Mock sonner toast
vi.mock('sonner', () => ({
    toast: {
        success: vi.fn(),
        error: vi.fn(),
        info: vi.fn(),
        warning: vi.fn(),
    },
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
})

// Reset mocks before each test
beforeEach(() => {
    vi.clearAllMocks()
})
