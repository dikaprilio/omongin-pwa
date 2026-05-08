import { verifyCurriculumAccess } from '@/lib/curriculum-access'
import QuizClientPage from './Client'

export const dynamic = 'force-dynamic'

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function QuizPage({ params }: PageProps) {
    await verifyCurriculumAccess('speaking-kids')
    const { id } = await params
    return <QuizClientPage topicId={parseInt(id)} />
}
