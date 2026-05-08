/**
 * Shared URL and domain utilities for Consistent Subdomain Handling
 */

export const getRootDomain = (host: string): string | undefined => {
    if (!host) return undefined
    const hostWithoutPort = host.split(':')[0]
    const parts = hostWithoutPort.split('.')

    // Handle .test domains (local development)
    if (hostWithoutPort.endsWith('.test')) {
        if (parts.length >= 2) {
            // Remove 'admin' prefix if present, keep the rest (e.g., admin.englishchill.test -> .englishchill.test)
            const rootParts = parts[0] === 'admin' ? parts.slice(1) : parts
            return `.${rootParts.join('.')}`
        }
        return undefined
    }

    // Production domains (e.g., admin.englishchillcourse.site -> .englishchillcourse.site)
    if (parts.length >= 2) {
        return `.${parts.slice(-2).join('.')}`
    }
    return undefined
}

export const getAdminUrl = (host: string) => {
    const hostParts = host.split(':')
    const domain = hostParts[0].replace(/^www\./, '')
    const port = hostParts[1]
    const adminDomain = domain.startsWith('admin.') ? domain : `admin.${domain}`
    return port ? `${adminDomain}:${port}` : adminDomain
}

export const getMainDomain = (host: string) => {
    const hostParts = host.split(':')
    const domain = hostParts[0]
    const port = hostParts[1]
    const mainDomain = domain.replace(/^admin\./, '').replace(/^www\./, '')
    return port ? `${mainDomain}:${port}` : mainDomain
}

export const isAdminSubdomain = (host: string) => {
    return host.startsWith('admin.')
}

export const isLocalhost = (host: string) => {
    return host.includes('localhost') || host.includes('127.0.0.1')
}

/**
 * Validates a redirect path to prevent Open Redirect vulnerabilities.
 * Only allows relative paths (starting with /) or absolute URLs matching approved domains.
 */
export const getSafeRedirect = (path: string | null | undefined, defaultPath: string = '/'): string => {
    if (!path) return defaultPath

    // 1. Handle relative paths
    // Must start with / but NOT // (which is a protocol-relative absolute URL)
    if (path.startsWith('/') && !path.startsWith('//')) {
        return path
    }

    // 2. Handle absolute URLs (only if they match our domains)
    try {
        const url = new URL(path)
        const hostname = url.hostname

        const isAllowedDomain =
            hostname === 'englishchill.test' ||
            hostname.endsWith('.englishchill.test') ||
            hostname === 'englishchillcourse.site' ||
            hostname.endsWith('.englishchillcourse.site') ||
            isLocalhost(hostname)

        if (isAllowedDomain) {
            // Return only the path + search part to force relative navigation within our app
            // Or return full URL if we trust the cross-subdomain logic
            return url.pathname + url.search + url.hash
        }
    } catch (e) {
        // Not a valid absolute URL, might be just a string
    }

    return defaultPath
}
