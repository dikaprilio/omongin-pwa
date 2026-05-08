import { verifyCurriculumAccess } from '@/lib/curriculum-access'
import ClientPage from './ClientPage'

// Force dynamic since we check auth cookies
export const dynamic = 'force-dynamic'

export default async function Page() {
    await verifyCurriculumAccess('basic-adults')
    return <ClientPage />
}
