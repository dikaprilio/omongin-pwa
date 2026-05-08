'use server';

import { registrationSchema, RegistrationInput } from '@/lib/validations/registration';
import { appendRegistration } from '@/lib/google/registration';
import { getPrivatePrice, getGroupPrice, getPromoDiscount, formatSessionTypeLabel } from '@/lib/data/kelas';

// Rate limiting helper
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function checkRateLimit(identifier: string): boolean {
    const now = Date.now();
    const requests = requestLog.get(identifier) || [];
    const validRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW);
    if (validRequests.length >= MAX_REQUESTS) return false;
    validRequests.push(now);
    requestLog.set(identifier, validRequests);
    return true;
}

/**
 * Package label: "ClassName (Promo)" for promo session counts, "ClassName" otherwise.
 * Promo = 4 sesi (hemat Rp20.000) or 8 sesi (hemat Rp60.000).
 */
function getPackageLabel(sessions: number, kelasTitle: string): string {
    const isPromo = sessions === 4 || sessions === 8;
    return isPromo ? `${kelasTitle} (Promo)` : kelasTitle;
}

function generateGroupId(): string {
    return `G-${Date.now().toString(36).toUpperCase()}`;
}

export async function submitRegistration(data: RegistrationInput) {
    try {
        if (!checkRateLimit('registration-global')) {
            return {
                success: false as const,
                error: 'Terlalu banyak permintaan. Coba lagi dalam 1 menit.',
            };
        }

        const validated = registrationSchema.safeParse(data);
        if (!validated.success) {
            return {
                success: false as const,
                error: `Validasi gagal: ${validated.error.issues.map((e) => e.message).join(', ')}`,
            };
        }

        const d = validated.data;
        const packageLabel = getPackageLabel(d.totalSessions, d.kelasTitle);

        // Calculate per-session price based on session type and options
        const hargaPerSesi = d.sessionType === 'private'
            ? getPrivatePrice(d.kelasTitle as any, (d.interviewTier || undefined) as any)
            : getGroupPrice(d.kelasTitle as any, (d.groupSize || undefined) as any);

        // Promo discount only applies to private sessions: 4 sesi = −Rp20.000, 8 sesi = −Rp60.000
        const promoDiscount = d.sessionType === 'private' ? getPromoDiscount(d.totalSessions) : 0;
        const totalPayment = (d.totalSessions * hargaPerSesi) - promoDiscount;

        const sessionTypeLabel = formatSessionTypeLabel(d.sessionType, (d.groupSize || undefined) as any);
        const groupId = d.sessionType === 'group' ? generateGroupId() : undefined;

        await appendRegistration({
            namaLengkap: d.namaLengkap,
            namaPanggilan: d.namaPanggilan,
            asalKampus: d.asalKampus,
            domisili: d.domisili,
            usia: d.usia,
            package: packageLabel,
            totalSessions: d.totalSessions,
            totalPayment,
            levelBahasa: d.levelBahasa,
            skillImprove: d.skillImprove,
            frekuensiBelajar: d.frekuensiBelajar,
            jenisKegiatan: d.jenisKegiatan,
            waktuNyaman: d.waktuNyaman,
            sessionType: sessionTypeLabel,
            groupId,
            members: d.members,
        });

        const waMessageLines = [
            `Halo kak, saya mau daftar di English Chill Club ✨`,
            ``,
        ];

        if (d.sessionType === 'group') {
            waMessageLines.push(`Tipe: ${sessionTypeLabel} — ${d.kelasTitle}`);
            waMessageLines.push(``);
            waMessageLines.push(`👤 Pemesan Utama:`);
            waMessageLines.push(`Nama: ${d.namaLengkap} (${d.usia} th) — ${d.domisili}`);
            d.members?.forEach((m, idx) => {
                waMessageLines.push(``);
                waMessageLines.push(`👤 Anggota ${idx + 1}:`);
                waMessageLines.push(`Nama: ${m.namaLengkap} (${m.usia} th) — ${m.domisili}`);
            });
            waMessageLines.push(``);
            waMessageLines.push(`Jumlah sesi: ${d.totalSessions} sesi`);
            waMessageLines.push(`Total per orang: Rp${totalPayment.toLocaleString('id-ID')}`);
            const duration = d.groupSize === '4' ? '75 menit' : '60 menit';
            waMessageLines.push(`Durasi kelas grup: ${duration}`);
        } else {
            waMessageLines.push(`1. Nama lengkap: ${d.namaLengkap}`);
            waMessageLines.push(`2. Nama panggilan: ${d.namaPanggilan}`);
            waMessageLines.push(`3. Asal kampus/sekolah/pekerjaan: ${d.asalKampus}`);
            waMessageLines.push(`4. Domisili: ${d.domisili}`);
            waMessageLines.push(`5. Usia: ${d.usia}`);
            waMessageLines.push(`6. Kelas: ${packageLabel}`);
            waMessageLines.push(`6a. Tipe sesi: ${sessionTypeLabel}`);
            waMessageLines.push(`7. Jumlah sesi: ${d.totalSessions} sesi (Total: Rp${totalPayment.toLocaleString('id-ID')})`);
        }

        waMessageLines.push(``);
        waMessageLines.push(`Level Bahasa Inggris: ${d.levelBahasa}`);
        waMessageLines.push(`Skill yang ingin di-improve: ${d.skillImprove.join(', ')}`);
        waMessageLines.push(`Frekuensi belajar: ${d.frekuensiBelajar}`);
        waMessageLines.push(`Jenis kegiatan: ${d.jenisKegiatan.join(', ')}`);
        waMessageLines.push(`Waktu yang paling nyaman: ${d.waktuNyaman}`);

        const waMessage = waMessageLines.join('\n');
        const whatsappUrl = `https://wa.me/628978902180?text=${encodeURIComponent(waMessage)}`;

        return {
            success: true as const,
            whatsappUrl,
            studentName: d.namaPanggilan,
        };
    } catch (error) {
        console.error('Error in submitRegistration:', error);
        return {
            success: false as const,
            error: error instanceof Error ? error.message : 'Gagal mengirim pendaftaran. Coba lagi.',
        };
    }
}
