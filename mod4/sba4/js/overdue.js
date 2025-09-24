import { tasks } from './state.js';

export function sweepOverdue() {
  const now = new Date();
  let changed = false;

  for (const t of tasks) {
    if (!t.deadline) continue;
    if (t.status === 'Completed') continue;

    const due = new Date(`${t.deadline}T11:59:59`);
    const isOverdue = now > due;

    if (isOverdue && t.status !== 'Overdue') {
      t.status = 'Overdue';
      changed = true;
    } else if (!isOverdue && t.status === 'Overdue') {
      t.status = 'Pending';
      changed = true;
    }
  }
  return changed;
}
