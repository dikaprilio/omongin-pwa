import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth/roles';
import OrdersClient from './OrdersClient';

export const metadata = {
  title: 'Data Pesanan | English Chill Course',
};

export default async function OrdersPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Only admins and teachers can access
  const admin = await isAdmin();
  if (!admin) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'teacher') {
      redirect('/dashboard');
    }
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          Data Pesanan Siswa
        </h1>
        <p className="text-slate-500 mt-1">
          Kelola data pesanan yang tersinkron dengan Google Sheets
        </p>
      </div>

      <OrdersClient />
    </div>
  );
}
