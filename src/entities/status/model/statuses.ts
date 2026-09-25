export const BOOKING_STATUSES = [
  'PENDING', 'CONFIRMED', 'CANCELLED', 'ARRIVED', 'IN_PROGRESS',
  'WAITING', 'COMPLETED', 'NO_SHOW',
] as const;

export const ORDER_STATUSES = [
  'CREATED', 'PAID', 'PROCESSING', 'SHIPPED', 'READY_FOR_PICKUP',
  'RECEIVED', 'COMPLETED', 'CANCELLED', 'REFUNDED',
] as const;

export const PAYMENT_STATUSES = [
  'PENDING', 'PAID', 'HELD', 'RELEASED', 'REFUNDED', 'FAILED',
] as const;

export type BookingStatus = (typeof BOOKING_STATUSES)[number];
export type OrderStatus = (typeof ORDER_STATUSES)[number];
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const statusLabels: Record<BookingStatus, string> = {
  PENDING: 'Ожидает подтверждения', CONFIRMED: 'Подтверждено', CANCELLED: 'Отменено',
  ARRIVED: 'Авто принято', IN_PROGRESS: 'В работе', WAITING: 'Ожидает детали',
  COMPLETED: 'Завершено', NO_SHOW: 'Клиент не приехал',
};
