import { z } from 'zod';

const groupMemberSchema = z.object({
    namaLengkap: z.string().min(1, 'Nama lengkap anggota wajib diisi').max(100, 'Nama terlalu panjang'),
    asalKampus: z.string().min(1, 'Asal kampus/sekolah/pekerjaan wajib diisi').max(200, 'Terlalu panjang'),
    domisili: z.string().min(1, 'Domisili wajib diisi').max(100, 'Domisili terlalu panjang'),
    usia: z.number().int().min(5, 'Usia minimal 5 tahun').max(99, 'Usia maksimal 99 tahun'),
});

export const registrationSchema = z.object({
    namaLengkap: z
        .string()
        .min(1, 'Nama lengkap wajib diisi')
        .max(100, 'Nama terlalu panjang'),
    namaPanggilan: z
        .string()
        .min(1, 'Nama panggilan wajib diisi')
        .max(50, 'Nama panggilan terlalu panjang'),
    asalKampus: z
        .string()
        .min(1, 'Asal kampus/sekolah/pekerjaan wajib diisi')
        .max(200, 'Terlalu panjang'),
    domisili: z
        .string()
        .min(1, 'Domisili wajib diisi')
        .max(100, 'Domisili terlalu panjang'),
    usia: z
        .number()
        .int()
        .min(5, 'Usia minimal 5 tahun')
        .max(99, 'Usia maksimal 99 tahun'),
    totalSessions: z
        .number()
        .int()
        .min(1, 'Minimal 1 sesi')
        .max(20, 'Maksimal 20 sesi'),
    kelasTitle: z
        .string()
        .min(1, 'Pilih jenis kelas'),
    sessionType: z.enum(['private', 'group'] as const),
    groupSize: z.enum(['2', '3', '4', ''] as const).optional().nullable(),
    interviewTier: z.enum(['Staff', 'Head', 'Manager', 'C-Level', ''] as const).optional().nullable(),
    members: z.array(groupMemberSchema).optional(),
    levelBahasa: z.enum(
        ['Beginner', 'Elementary', 'Pre-intermediate', 'Intermediate', 'Upper-intermediate', 'Advanced'] as const
    ),
    skillImprove: z
        .array(z.string())
        .min(1, 'Pilih minimal 1 skill yang ingin di-improve'),
    frekuensiBelajar: z.enum(['1x/minggu', '2x/minggu', 'Fleksibel'] as const),
    jenisKegiatan: z
        .array(z.string())
        .min(1, 'Pilih minimal 1 jenis kegiatan'),
    waktuNyaman: z.enum(['Pagi', 'Siang', 'Sore', 'Malam', 'Fleksibel'] as const),
}).superRefine((data, ctx) => {
    if (data.sessionType === 'group') {
        if (!data.groupSize || !['2', '3', '4'].includes(data.groupSize)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pilih jumlah orang untuk kelas grup',
                path: ['groupSize'],
            });
        }
        const expectedMembers = data.groupSize ? parseInt(data.groupSize) - 1 : 0;
        if (!data.members || data.members.length !== expectedMembers) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Lengkapi data ${expectedMembers} anggota grup lainnya`,
                path: ['members'],
            });
        }
        if (data.kelasTitle === 'Interview Prep') {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Interview Prep tidak tersedia untuk kelas grup',
                path: ['kelasTitle'],
            });
        }
    }
    if (data.kelasTitle === 'Interview Prep' && data.sessionType === 'private') {
        if (!data.interviewTier || !['Staff', 'Head', 'Manager', 'C-Level'].includes(data.interviewTier)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pilih level wawancara',
                path: ['interviewTier'],
            });
        }
    }
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
export type GroupMemberInput = z.infer<typeof groupMemberSchema>;
