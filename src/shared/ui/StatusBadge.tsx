import type { BookingStatus } from '../../entities/status/model/statuses';
import { statusLabels } from '../../entities/status/model/statuses';

export function StatusBadge({ status }: { status: BookingStatus }) {
  return <span className={`status status--${status.toLowerCase()}`}>{statusLabels[status]}</span>;
}
