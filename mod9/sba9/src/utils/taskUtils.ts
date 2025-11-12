import type { FilterOptions, Task, TaskPriority } from '../types/index';

const priorityRank: Record<TaskPriority, number> = {
  low: 1,
  medium: 2,
  high: 3,
};

export function sortTasks(
  tasks: Task[],
  sortBy: FilterOptions['sortBy'],
  dir: FilterOptions['sortDir']
) {
  const sign = dir === 'asc' ? 1 : -1;
  return [...tasks].sort((a, b) => {
    const av =
      sortBy === 'priority'
        ? priorityRank[a.priority]
        : (a as unknown as Record<string, unknown>)[sortBy] || '';
    const bv =
      sortBy === 'priority'
        ? priorityRank[b.priority]
        : (b as unknown as Record<string, unknown>)[sortBy] || '';
    return av < bv ? -1 * sign : av > bv ? 1 * sign : 0;
  });
}

export function filterTasks(tasks: Task[], filters: FilterOptions) {
  const q = filters.query.toLowerCase();
  return tasks.filter(t => {
    const matchesQuery =
      t.title.toLowerCase().includes(q) ||
      (t.description ?? '').toLowerCase().includes(q);
    const matchesStatus =
      filters.status === 'all' || t.status === filters.status;
    const matchesPriority =
      filters.priority === 'all' || t.priority === filters.priority;
    return matchesQuery && matchesStatus && matchesPriority;
  });
}
