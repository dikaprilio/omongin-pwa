import { redirect } from 'next/navigation'
import { getCurrentUserWithRole } from '@/lib/auth/roles'
import { fetchAllReviews, fetchMyReviews } from './actions'
import { ReviewsDashboard } from '@/components/reviews/ReviewsDashboard'

export default async function ReviewsPage() {
    const user = await getCurrentUserWithRole()

    if (!user) {
        redirect('/login')
    }

    if (user.role === 'student') {
        redirect('/curriculum')
    }

    const isAdmin = user.role === 'super_admin'

    // Admin sees all reviews, teacher sees only their own
    const reviews = isAdmin
        ? await fetchAllReviews()
        : await fetchMyReviews()

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    {isAdmin ? 'Semua Review' : 'Review Saya'}
                </h1>
                <p className="text-muted-foreground">
                    {isAdmin
                        ? 'Lihat semua feedback dari siswa untuk seluruh tutor.'
                        : 'Lihat feedback dari siswa untuk sesi kamu.'
                    }
                </p>
            </div>

            <ReviewsDashboard
                reviews={reviews}
                isAdmin={isAdmin}
            />
        </div>
    )
}
