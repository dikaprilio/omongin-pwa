import { verifyCurriculumAccess } from '@/lib/curriculum-access'
import ClientPage from './ClientPage'

// Force dynamic since we check auth cookies
export const dynamic = 'force-dynamic'

export default async function Page() {
    // 1. Verify Access (will redirect if failed)
    await verifyCurriculumAccess('speaking-adults')

    // 2. Render Client Component
    return <ClientPage />
}
