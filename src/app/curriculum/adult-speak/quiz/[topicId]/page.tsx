import { verifyCurriculumAccess } from '@/lib/curriculum-access'
import QuizClientPage from './Client'

// Force dynamic since we check auth cookies
export const dynamic = 'force-dynamic'

interface PageProps {
    params: Promise<{ topicId: string }>
}

export default async function QuizPage({ params }: PageProps) {
    // 1. Verify Access (will redirect if failed)
    await verifyCurriculumAccess('speaking-adults')

    // 2. Get topic ID
    const { topicId } = await params

    // 3. Render Client Component
    return <QuizClientPage topicId={parseInt(topicId)} />
}
