'use client';

import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { Order } from '@/lib/google/sheets';
import {
  getOrders,
  createOrder,
  editOrder,
  removeOrder,
} from '@/app/(dashboard)/orders/actions';
import { CreateOrderInput, UpdateOrderInput } from '@/lib/validations/order';
import { toast } from 'sonner';

const ORDERS_KEY = ['orders'] as const;

export function useOrders() {
  return useQuery({
    queryKey: ORDERS_KEY,
    queryFn: async () => {
      const result = await getOrders();
      if (!result.success) {
        throw new Error(result.error);
      }
      return result;
    },
    staleTime: 0, // Always fetch fresh data
    gcTime: 0, // Don't cache in memory
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateOrderInput) => {
      const result = await createOrder(data);
      if (!result.success) {
        throw new Error(result.error);
      }
      return result.order;
    },
    onMutate: async (newOrder) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ORDERS_KEY });

      // Snapshot previous value
      const previousOrders = queryClient.getQueryData(ORDERS_KEY);

      // Optimistically update
      queryClient.setQueryData(ORDERS_KEY, (old: any) => {
        if (!old) return old;
        const optimisticOrder: Order = {
          ...newOrder,
          rowIndex: 999999, // Large number to stay at top when sorted by rowIndex desc
          date: newOrder.date || new Date().toLocaleDateString('id-ID'),
          age: newOrder.age ?? null,
          job: newOrder.job || '',
          location: newOrder.location || '',
          package: newOrder.package || '',
          totalSessions: newOrder.totalSessions ?? null,
          remainingSessions: newOrder.remainingSessions ?? null,
          totalPayment: newOrder.totalPayment ?? null,
          paymentStatus: newOrder.paymentStatus || '',
          assignedTo: newOrder.assignedTo || '',
          metodePayment: newOrder.metodePayment || '',
          sessionType: (newOrder.sessionType as Order['sessionType']) || 'Private',
          groupId: newOrder.groupId || '',
        };
        return {
          ...old,
          orders: [...old.orders, optimisticOrder],
        };
      });

      return { previousOrders };
    },
    onError: (err, newOrder, context) => {
      // Rollback on error
      if (context?.previousOrders) {
        queryClient.setQueryData(ORDERS_KEY, context.previousOrders);
      }
      toast.error('Failed to create order');
    },
    onSuccess: () => {
      toast.success('Order created successfully');
      queryClient.invalidateQueries({ queryKey: ORDERS_KEY });
    },
  });
}

export function useUpdateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      rowIndex,
      data,
    }: {
      rowIndex: number;
      data: UpdateOrderInput;
    }) => {
      const result = await editOrder(rowIndex, data);
      if (!result.success) {
        throw new Error(result.error);
      }
      return result.order;
    },
    onMutate: async ({ rowIndex, data }) => {
      await queryClient.cancelQueries({ queryKey: ORDERS_KEY });
      const previousOrders = queryClient.getQueryData(ORDERS_KEY);

      queryClient.setQueryData(ORDERS_KEY, (old: any) => {
        if (!old) return old;
        return {
          ...old,
          orders: old.orders.map((order: Order) =>
            order.rowIndex === rowIndex ? { ...order, ...data } : order
          ),
        };
      });

      return { previousOrders };
    },
    onError: (err, variables, context) => {
      if (context?.previousOrders) {
        queryClient.setQueryData(ORDERS_KEY, context.previousOrders);
      }
      toast.error('Failed to update order');
    },
    onSuccess: () => {
      toast.success('Order updated successfully');
      queryClient.invalidateQueries({ queryKey: ORDERS_KEY });
    },
  });
}

export function useDeleteOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (rowIndex: number) => {
      const result = await removeOrder(rowIndex);
      if (!result.success) {
        throw new Error(result.error);
      }
      return rowIndex;
    },
    onMutate: async (rowIndex) => {
      await queryClient.cancelQueries({ queryKey: ORDERS_KEY });
      const previousOrders = queryClient.getQueryData(ORDERS_KEY);

      queryClient.setQueryData(ORDERS_KEY, (old: any) => {
        if (!old) return old;
        return {
          ...old,
          orders: old.orders.filter((order: Order) => order.rowIndex !== rowIndex),
        };
      });

      return { previousOrders };
    },
    onError: (err, rowIndex, context) => {
      if (context?.previousOrders) {
        queryClient.setQueryData(ORDERS_KEY, context.previousOrders);
      }
      toast.error('Failed to delete order');
    },
    onSuccess: () => {
      toast.success('Order deleted successfully');
      queryClient.invalidateQueries({ queryKey: ORDERS_KEY });
    },
  });
}
