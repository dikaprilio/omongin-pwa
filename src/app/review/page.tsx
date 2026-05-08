import { Suspense } from 'react'
import ReviewForm from './ReviewForm'

export default function ReviewPage() {
    return (
        <Suspense>
            <ReviewForm />
        </Suspense>
    )
}
