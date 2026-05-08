// Mirrored from ClassSection.tsx — shared between client form and server action
export const KELAS_OPTIONS = [
    { title: 'Speaking for Adults', price: 70000 },
    { title: 'Speaking for Kids', price: 70000 },
    { title: 'Interview Prep', price: 85000 },
    { title: 'Basic English (Adults)', price: 60000 },
    { title: 'Basic English (Kids)', price: 60000 },
    { title: 'Presentation Skills', price: 85000 },
] as const;

export type KelasTitle = typeof KELAS_OPTIONS[number]['title'];

export const INTERVIEW_TIERS = [
    { key: 'Staff', label: 'Staff / Entry Level / Beasiswa', price: 85000 },
    { key: 'Head', label: 'Head', price: 100000 },
    { key: 'Manager', label: 'Manager', price: 115000 },
    { key: 'C-Level', label: 'C-Level', price: 135000 },
] as const;

export type InterviewTier = typeof INTERVIEW_TIERS[number]['key'];

export const GROUP_SIZES = ['2', '3', '4'] as const;
export type GroupSize = typeof GROUP_SIZES[number];

export const SESSION_TYPES = ['private', 'group'] as const;
export type SessionType = typeof SESSION_TYPES[number];

// Group pricing per person (IDR)
export const GROUP_PRICING: Record<Extract<KelasTitle, 'Speaking for Adults' | 'Speaking for Kids' | 'Basic English (Adults)' | 'Basic English (Kids)'>, Record<GroupSize, number>> = {
    'Speaking for Adults': { '2': 60000, '3': 55000, '4': 50000 },
    'Speaking for Kids':   { '2': 60000, '3': 55000, '4': 50000 },
    'Basic English (Adults)': { '2': 50000, '3': 45000, '4': 40000 },
    'Basic English (Kids)':   { '2': 50000, '3': 45000, '4': 40000 },
};

export function getPrivatePrice(kelasTitle: KelasTitle, interviewTier?: InterviewTier): number {
    if (kelasTitle === 'Interview Prep') {
        const tier = INTERVIEW_TIERS.find(t => t.key === interviewTier);
        return tier?.price ?? 85000;
    }
    return KELAS_OPTIONS.find(k => k.title === kelasTitle)?.price ?? 0;
}

export function getGroupPrice(kelasTitle: KelasTitle, groupSize: GroupSize): number {
    const pricing = GROUP_PRICING[kelasTitle as keyof typeof GROUP_PRICING];
    return pricing?.[groupSize] ?? 0;
}

export function getPromoDiscount(totalSessions: number): number {
    return totalSessions === 4 ? 20000 : totalSessions === 8 ? 60000 : 0;
}

export function formatSessionTypeLabel(sessionType: SessionType, groupSize?: GroupSize): string {
    if (sessionType === 'group' && groupSize) {
        return `Group - ${groupSize} orang`;
    }
    return 'Private';
}
