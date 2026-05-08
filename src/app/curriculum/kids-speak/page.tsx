import { verifyCurriculumAccess } from '@/lib/curriculum-access'
import ClientPage from './ClientPage'

export const dynamic = 'force-dynamic'

export default async function Page() {
    await verifyCurriculumAccess('speaking-kids')
    return <ClientPage />
}
