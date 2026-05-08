import { z } from 'zod';

export const orderSchema = z.object({
  date: z.string().optional(),
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  age: z.number().int().min(1).max(120).nullable().optional(),
  job: z.string().max(100).optional(),
  location: z.string().max(100).optional(),
  package: z.string().max(100).optional(),
  totalSessions: z.number().int().min(0).nullable().optional(),
  remainingSessions: z.number().int().min(0).nullable().optional(),
  totalPayment: z.number().min(0).nullable().optional(),
  paymentStatus: z.enum(['Done', 'Not Done', '']).optional(),
  assignedTo: z.string().max(100).optional(),
  metodePayment: z.enum(['OLD', 'NEW', '']).optional(),
  sessionType: z.enum(['Private', 'Group - 2 orang', 'Group - 3 orang', 'Group - 4 orang', '']).optional(),
  groupId: z.string().max(50).optional(),
});

export const createOrderSchema = orderSchema;
export const updateOrderSchema = orderSchema.partial();

export type OrderInput = z.infer<typeof orderSchema>;
export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export type UpdateOrderInput = z.infer<typeof updateOrderSchema>;
