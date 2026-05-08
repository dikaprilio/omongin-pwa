'use client';

import { useState, useMemo } from 'react';
import {
  useOrders,
  useCreateOrder,
  useUpdateOrder,
  useDeleteOrder,
} from '@/hooks/useOrders';
import { QueryProvider } from '@/providers/QueryProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CurrencyInput } from '@/components/ui/currency-input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Search,
  Plus,
  RefreshCw,
  FileSpreadsheet,
  Pencil,
  Trash2,
  Loader2,
} from 'lucide-react';
import Link from 'next/link';
import { Order } from '@/lib/google/sheets';
import { CreateOrderInput } from '@/lib/validations/order';

function formatCurrency(amount: number | null) {
  if (amount === null) return '-';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Inline editing for remaining sessions
function InlineRemainingSessions({ order }: { order: Order }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(order.remainingSessions?.toString() ?? '');
  const updateOrder = useUpdateOrder();

  const handleSave = () => {
    const numValue = value === '' ? null : parseInt(value);
    if (numValue !== order.remainingSessions) {
      updateOrder.mutate({
        rowIndex: order.rowIndex,
        data: { remainingSessions: numValue },
      });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setValue(order.remainingSessions?.toString() ?? '');
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <Input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className="w-12 h-6 text-center text-xs px-0.5 mx-auto"
        autoFocus
      />
    );
  }

  return (
    <button
      onClick={() => setIsEditing(true)}
      className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 px-1.5 py-0.5 rounded cursor-pointer min-w-[1.5rem] text-xs transition-colors"
      title="Klik untuk edit"
    >
      {order.remainingSessions ?? 0}
    </button>
  );
}

// Inline editing for payment status
function InlinePaymentStatus({ order }: { order: Order }) {
  const [isOpen, setIsOpen] = useState(false);
  const updateOrder = useUpdateOrder();

  const handleChange = (value: string) => {
    const newStatus = value === 'unset' ? '' : (value as 'Done' | 'Not Done');
    if (newStatus !== order.paymentStatus) {
      updateOrder.mutate({
        rowIndex: order.rowIndex,
        data: { paymentStatus: newStatus },
      });
    }
    setIsOpen(false);
  };

  return (
    <Select
      value={order.paymentStatus || 'unset'}
      onValueChange={handleChange}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SelectTrigger className="w-[90px] h-7 text-xs border-0 hover:bg-slate-100 px-2">
        <SelectValue>
          {order.paymentStatus ? (
            <span className={
              order.paymentStatus === 'Done'
                ? 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700'
                : 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700'
            }>
              {order.paymentStatus === 'Done' ? 'Lunas' : 'Belum Lunas'}
            </span>
          ) : (
            <span className="text-slate-400">-</span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="unset">-</SelectItem>
        <SelectItem value="Done">Lunas</SelectItem>
        <SelectItem value="Not Done">Belum Lunas</SelectItem>
      </SelectContent>
    </Select>
  );
}

function OrderStats({ orders }: { orders: Order[] }) {
  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const donePayments = orders.filter((o) => o.paymentStatus === 'Done').length;
    const pendingPayments = orders.filter((o) => o.paymentStatus === 'Not Done').length;
    const totalRevenue = orders
      .filter((o) => o.paymentStatus === 'Done')
      .reduce((sum, o) => sum + (o.totalPayment || 0), 0);
    const unassigned = orders.filter((o) => !o.assignedTo || o.assignedTo === '').length;

    return [
      { label: 'Total Pesanan', value: totalOrders, color: 'bg-blue-50 text-blue-700' },
      { label: 'Sudah Bayar', value: donePayments, color: 'bg-green-50 text-green-700' },
      { label: 'Belum Bayar', value: pendingPayments, color: 'bg-amber-50 text-amber-700' },
      { label: 'Belum Ditugaskan', value: unassigned, color: 'bg-red-50 text-red-700' },
    ];
  }, [orders]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className={`p-4 rounded-xl border shadow-sm ${stat.color} border-opacity-20`}>
          <p className="text-xs font-medium opacity-70 uppercase tracking-wide">{stat.label}</p>
          <p className="text-3xl font-bold mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function AddOrderDialog() {
  const [open, setOpen] = useState(false);
  const createOrder = useCreateOrder();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: CreateOrderInput = {
      // Don't send date - let server generate it in proper ISO format
      name: formData.get('name') as string,
      age: formData.get('age') ? parseInt(formData.get('age') as string) : null,
      job: formData.get('job') as string,
      location: formData.get('location') as string,
      package: formData.get('package') === 'unset' ? '' : (formData.get('package') as string),
      totalSessions: formData.get('totalSessions') ? parseInt(formData.get('totalSessions') as string) : null,
      remainingSessions: formData.get('remainingSessions') ? parseInt(formData.get('remainingSessions') as string) : null,
      totalPayment: formData.get('totalPayment') ? parseFloat(formData.get('totalPayment') as string) : null,
      paymentStatus: (formData.get('paymentStatus') === 'unset' ? '' : formData.get('paymentStatus')) as 'Done' | 'Not Done' | '',
      assignedTo: formData.get('assignedTo') as string,
      metodePayment: (formData.get('metodePayment') === 'unset' ? '' : formData.get('metodePayment')) as 'OLD' | 'NEW' | '',
      sessionType: (formData.get('sessionType') === 'unset' ? '' : formData.get('sessionType')) as Order['sessionType'] | '',
    };

    createOrder.mutate(data, {
      onSuccess: () => setOpen(false),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Tambah Pesanan
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tambah Pesanan Baru</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama *</Label>
              <Input id="name" name="name" required placeholder="Contoh: Budi Santoso" />
              <p className="text-xs text-slate-400">Nama lengkap siswa</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Usia</Label>
              <Input id="age" name="age" type="number" placeholder="25" />
              <p className="text-xs text-slate-400">Usia dalam tahun</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="job">Pekerjaan</Label>
            <Input id="job" name="job" placeholder="Contoh: Mahasiswa, Karyawan" />
            <p className="text-xs text-slate-400">Pekerjaan atau profesi saat ini</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Domisili</Label>
            <Input id="location" name="location" placeholder="Contoh: Jakarta, Bandung" />
            <p className="text-xs text-slate-400">Kota atau wilayah tempat tinggal</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="package">Paket</Label>
            <Select name="package">
              <SelectTrigger>
                <SelectValue placeholder="Pilih paket" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unset">-</SelectItem>
                <SelectItem value="Basic English">Basic English</SelectItem>
                <SelectItem value="Speaking Class">Speaking Class</SelectItem>
                <SelectItem value="Speaking For Adults">Speaking For Adults</SelectItem>
                <SelectItem value="Presentation Class">Presentation Class</SelectItem>
                <SelectItem value="Interview Prep">Interview Prep</SelectItem>
                <SelectItem value="Interview & Conversation">Interview & Conversation</SelectItem>
                <SelectItem value="Presentation (KTI)">Presentation (KTI)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-slate-400">Pilih paket yang diambil siswa</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="totalSessions">Total Sesi</Label>
              <Input id="totalSessions" name="totalSessions" type="number" placeholder="4" />
              <p className="text-xs text-slate-400">Jumlah total sesi yang dibeli</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="remainingSessions">Sisa Sesi</Label>
              <Input id="remainingSessions" name="remainingSessions" type="number" placeholder="2" />
              <p className="text-xs text-slate-400">Sisa sesi yang belum digunakan</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="totalPayment">Total Pembayaran</Label>
              <CurrencyInput
                id="totalPaymentDisplay"
                placeholder="300.000"
                onChange={(val) => {
                  const hiddenInput = document.getElementById('totalPayment') as HTMLInputElement;
                  if (hiddenInput) hiddenInput.value = val?.toString() || '';
                }}
              />
              <input type="hidden" id="totalPayment" name="totalPayment" />
              <p className="text-xs text-slate-400">Total pembayaran dalam Rupiah</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentStatus">Status Pembayaran</Label>
              <Select name="paymentStatus" defaultValue="unset">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unset">-</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                  <SelectItem value="Not Done">Not Done</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">Status pembayaran saat ini</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="metodePayment">Metode Payment</Label>
              <Select name="metodePayment" defaultValue="unset">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih metode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unset">-</SelectItem>
                  <SelectItem value="OLD">OLD</SelectItem>
                  <SelectItem value="NEW">NEW</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">Metode pembayaran (OLD/NEW)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sessionType">Tipe Sesi</Label>
              <Select name="sessionType" defaultValue="Private">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tipe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unset">-</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                  <SelectItem value="Group - 2 orang">Group - 2 orang</SelectItem>
                  <SelectItem value="Group - 3 orang">Group - 3 orang</SelectItem>
                  <SelectItem value="Group - 4 orang">Group - 4 orang</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">Tipe sesi kelas</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="assignedTo">Ditugaskan Ke</Label>
            <Input id="assignedTo" name="assignedTo" placeholder="Contoh: Kak Fira, Kak Zen" />
            <p className="text-xs text-slate-400">Nama pengajar yang ditugaskan</p>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={createOrder.isPending}>
              {createOrder.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Simpan Pesanan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function EditOrderDialog({ order }: { order: Order }) {
  const [open, setOpen] = useState(false);
  const updateOrder = useUpdateOrder();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name') as string,
      age: formData.get('age') ? parseInt(formData.get('age') as string) : null,
      job: formData.get('job') as string,
      location: formData.get('location') as string,
      package: formData.get('package') === 'unset' ? '' : (formData.get('package') as string),
      totalSessions: formData.get('totalSessions') ? parseInt(formData.get('totalSessions') as string) : null,
      remainingSessions: formData.get('remainingSessions') ? parseInt(formData.get('remainingSessions') as string) : null,
      totalPayment: formData.get('totalPayment') ? parseFloat(formData.get('totalPayment') as string) : null,
      paymentStatus: (formData.get('paymentStatus') === 'unset' ? '' : formData.get('paymentStatus')) as 'Done' | 'Not Done' | '',
      assignedTo: formData.get('assignedTo') as string,
      metodePayment: (formData.get('metodePayment') === 'unset' ? '' : formData.get('metodePayment')) as 'OLD' | 'NEW' | '',
      sessionType: (formData.get('sessionType') === 'unset' ? '' : formData.get('sessionType')) as Order['sessionType'] | '',
    };

    updateOrder.mutate(
      { rowIndex: order.rowIndex, data },
      { onSuccess: () => setOpen(false) }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Pencil className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Pesanan</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Nama *</Label>
              <Input id="edit-name" name="name" defaultValue={order.name} required />
              <p className="text-xs text-slate-400">Nama lengkap siswa</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-age">Usia</Label>
              <Input id="edit-age" name="age" type="number" defaultValue={order.age ?? ''} />
              <p className="text-xs text-slate-400">Usia dalam tahun</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-job">Pekerjaan</Label>
            <Input id="edit-job" name="job" defaultValue={order.job} />
            <p className="text-xs text-slate-400">Pekerjaan atau profesi saat ini</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-location">Domisili</Label>
            <Input id="edit-location" name="location" defaultValue={order.location} />
            <p className="text-xs text-slate-400">Kota atau wilayah tempat tinggal</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-package">Paket</Label>
            <Select name="package" defaultValue={order.package || 'unset'}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unset">-</SelectItem>
                <SelectItem value="Basic English">Basic English</SelectItem>
                <SelectItem value="Speaking Class">Speaking Class</SelectItem>
                <SelectItem value="Speaking For Adults">Speaking For Adults</SelectItem>
                <SelectItem value="Presentation Class">Presentation Class</SelectItem>
                <SelectItem value="Interview Prep">Interview Prep</SelectItem>
                <SelectItem value="Interview & Conversation">Interview & Conversation</SelectItem>
                <SelectItem value="Presentation (KTI)">Presentation (KTI)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-slate-400">Pilih paket yang diambil siswa</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-totalSessions">Total Sesi</Label>
              <Input id="edit-totalSessions" name="totalSessions" type="number" defaultValue={order.totalSessions ?? ''} />
              <p className="text-xs text-slate-400">Jumlah total sesi yang dibeli</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-remainingSessions">Sisa Sesi</Label>
              <Input id="edit-remainingSessions" name="remainingSessions" type="number" defaultValue={order.remainingSessions ?? ''} />
              <p className="text-xs text-slate-400">Sisa sesi yang belum digunakan</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-totalPayment">Total Pembayaran</Label>
              <CurrencyInput
                id="edit-totalPaymentDisplay"
                defaultValue={order.totalPayment}
                placeholder="300.000"
                onChange={(val) => {
                  const hiddenInput = document.getElementById('edit-totalPayment') as HTMLInputElement;
                  if (hiddenInput) hiddenInput.value = val?.toString() || '';
                }}
              />
              <input type="hidden" id="edit-totalPayment" name="totalPayment" />
              <p className="text-xs text-slate-400">Total pembayaran dalam Rupiah</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-paymentStatus">Status Pembayaran</Label>
              <Select name="paymentStatus" defaultValue={order.paymentStatus || 'unset'}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unset">-</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                  <SelectItem value="Not Done">Not Done</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">Status pembayaran saat ini</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-metodePayment">Metode Payment</Label>
              <Select name="metodePayment" defaultValue={order.metodePayment || 'unset'}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unset">-</SelectItem>
                  <SelectItem value="OLD">OLD</SelectItem>
                  <SelectItem value="NEW">NEW</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">Metode pembayaran (OLD/NEW)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-sessionType">Tipe Sesi</Label>
              <Select name="sessionType" defaultValue={order.sessionType || 'Private'}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unset">-</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                  <SelectItem value="Group - 2 orang">Group - 2 orang</SelectItem>
                  <SelectItem value="Group - 3 orang">Group - 3 orang</SelectItem>
                  <SelectItem value="Group - 4 orang">Group - 4 orang</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">Tipe sesi kelas</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-assignedTo">Ditugaskan Ke</Label>
            <Input id="edit-assignedTo" name="assignedTo" defaultValue={order.assignedTo} />
            <p className="text-xs text-slate-400">Nama pengajar yang ditugaskan</p>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={updateOrder.isPending}>
              {updateOrder.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Update Pesanan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function OrdersContent() {
  const { data, isLoading, error, refetch, isRefetching } = useOrders();
  const deleteOrder = useDeleteOrder();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [packageFilter, setPackageFilter] = useState<string>('all');
  const [sessionTypeFilter, setSessionTypeFilter] = useState<string>('all');

  const orders = data?.orders ?? [];
  const filterOptions = data?.filterOptions ?? { packages: [], paymentStatuses: [], sessionTypes: [] };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        !searchQuery ||
        order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.package.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'all' || order.paymentStatus === statusFilter;
      const matchesPackage = packageFilter === 'all' || order.package === packageFilter;
      const matchesSessionType = sessionTypeFilter === 'all' || order.sessionType === sessionTypeFilter;

      return matchesSearch && matchesStatus && matchesPackage && matchesSessionType;
    }).sort((a, b) => b.rowIndex - a.rowIndex);
  }, [orders, searchQuery, statusFilter, packageFilter, sessionTypeFilter]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        <p className="font-medium">Failed to load orders</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <OrderStats orders={orders} />

      {/* Actions */}
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Cari nama, domisili, atau paket..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Status</SelectItem>
              {filterOptions.paymentStatuses.map((s) => (
                <SelectItem key={s} value={s}>
                  {s === 'Done' ? 'Lunas' : s === 'Not Done' ? 'Belum Lunas' : s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={packageFilter} onValueChange={setPackageFilter}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Paket" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Paket</SelectItem>
              {filterOptions.packages.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sessionTypeFilter} onValueChange={setSessionTypeFilter}>
            <SelectTrigger className="w-[130px] bg-white">
              <SelectValue placeholder="Tipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Tipe</SelectItem>
              {filterOptions.sessionTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={() => refetch()} disabled={isRefetching} className="shrink-0">
            <RefreshCw className={`w-4 h-4 ${isRefetching ? 'animate-spin' : ''}`} />
          </Button>
          <Button variant="outline" asChild className="shrink-0">
            <Link
              href="https://docs.google.com/spreadsheets/d/1nc1VHGu4gvLeRHdfU4kgWNg1FOWGr8yrwav-H11mjQ0/edit"
              target="_blank"
            >
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Sheet
            </Link>
          </Button>
          <AddOrderDialog />
        </div>
      </div>

      {/* Last Updated */}
      {data?.lastUpdated && (
        <p className="text-xs text-slate-400 flex items-center gap-1">
          <RefreshCw className="w-3 h-3" />
          Terakhir sinkron: {new Date(data.lastUpdated).toLocaleString('id-ID')}
        </p>
      )}

      {/* Table */}
      <div className="rounded-xl overflow-hidden bg-white border border-slate-200">
        <Table className="border-0">
          <TableHeader>
            <TableRow className="bg-slate-50/80 hover:bg-slate-50/80 border-b border-slate-200">
              <TableHead className="w-[90px]">Tanggal</TableHead>
              <TableHead className="w-[180px]">Siswa</TableHead>
              <TableHead className="w-[100px]">Detail</TableHead>
              <TableHead className="w-[140px]">Paket</TableHead>
              <TableHead className="w-[80px] text-center">Tipe</TableHead>
              <TableHead className="w-[60px] text-center">Total</TableHead>
              <TableHead className="w-[60px] text-center">Sisa</TableHead>
              <TableHead className="w-[110px] text-right">Bayar</TableHead>
              <TableHead className="w-[90px] text-center">Status</TableHead>
              <TableHead className="w-[80px] text-center">Metode</TableHead>
              <TableHead className="w-[120px]">Tutor</TableHead>
              <TableHead className="w-[60px] text-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} className="text-center py-8 text-slate-500">
                  Tidak ada pesanan ditemukan
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.rowIndex} className="hover:bg-slate-50/50 group border-0">
                  {/* Date */}
                  <TableCell>
                    <div className="text-xs">
                      <p className="font-medium text-slate-700">
                        {(() => {
                          if (!order.date) return '-';
                          // Handle Indonesian date format: DD/MM/YYYY or DD/MM/YYYY HH:MM:SS
                          const parts = order.date.split(/[\/\s:]/);
                          if (parts.length >= 3) {
                            const day = parseInt(parts[0]);
                            const month = parseInt(parts[1]) - 1;
                            const year = parseInt(parts[2]);
                            const date = new Date(year, month, day);
                            return date.toLocaleDateString('id-ID', {
                              day: '2-digit',
                              month: 'short',
                              year: '2-digit'
                            });
                          }
                          return order.date;
                        })()}
                      </p>
                    </div>
                  </TableCell>

                  {/* Nama & Age */}
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-xs font-bold text-blue-700">
                        {order.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{order.name}</p>
                        <p className="text-xs text-slate-500">{order.age ? `${order.age} th` : '-'}</p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Job & Location */}
                  <TableCell>
                    <div className="text-sm">
                      <p className="text-slate-700">{order.job || '-'}</p>
                      <p className="text-xs text-slate-400">{order.location || '-'}</p>
                    </div>
                  </TableCell>

                  {/* Package */}
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                      {order.package || '-'}
                    </span>
                  </TableCell>

                  {/* Session Type */}
                  <TableCell className="text-center">
                    {order.sessionType ? (
                      <span className={
                        order.sessionType === 'Private'
                          ? 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600'
                          : 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700'
                      }>
                        {order.sessionType}
                      </span>
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </TableCell>

                  {/* Total Sessions */}
                  <TableCell className="text-center">
                    <span className="text-sm font-medium text-slate-700">{order.totalSessions ?? 0}</span>
                  </TableCell>

                  {/* Remaining Sessions */}
                  <TableCell className="text-center">
                    <InlineRemainingSessions order={order} />
                  </TableCell>

                  {/* Payment */}
                  <TableCell className="text-right">
                    <span className="text-sm font-medium text-slate-700">
                      {formatCurrency(order.totalPayment)}
                    </span>
                  </TableCell>

                  {/* Payment Status */}
                  <TableCell className="text-center">
                    <InlinePaymentStatus order={order} />
                  </TableCell>

                  {/* Metode Payment */}
                  <TableCell className="text-center">
                    {order.metodePayment ? (
                      <span className={
                        order.metodePayment === 'NEW'
                          ? 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700'
                          : 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600'
                      }>
                        {order.metodePayment}
                      </span>
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </TableCell>

                  {/* Assigned To */}
                  <TableCell>
                    {order.assignedTo && !order.assignedTo.toLowerCase().includes('belum') ? (
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        {order.assignedTo}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                        Belum
                      </span>
                    )}
                  </TableCell>

                  {/* Actions */}
                  <TableCell>
                    <div className="flex items-center justify-center gap-0">
                      <EditOrderDialog order={order} />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => {
                          if (confirm('Hapus pesanan ini?')) {
                            deleteOrder.mutate(order.rowIndex);
                          }
                        }}
                        disabled={deleteOrder.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default function OrdersClient() {
  return (
    <QueryProvider>
      <OrdersContent />
    </QueryProvider>
  );
}
