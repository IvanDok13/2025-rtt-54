import type {
  TaskFilterProps,
  TaskPriority,
  TaskStatus,
} from '../../types/index';

export function TaskFilter({ filters, onChange, onReset }: TaskFilterProps) {
  return (
    <div className='p-3 rounded-2xl border bg-white/60 dark:bg-neutral-900/60 dark:border-neutral-800 flex flex-col sm:flex-row gap-2 sm:items-center'>
      <input
        type='text'
        placeholder='Search...'
        value={filters.query}
        onChange={e => onChange({ query: e.target.value })}
        className='flex-1 px-3 py-2 rounded-xl border dark:border-neutral-700 bg-white dark:bg-neutral-800'
      />
      <select
        value={filters.status}
        onChange={e =>
          onChange({ status: e.target.value as TaskStatus | 'all' })
        }
        className='px-3 py-2 rounded-xl border dark:border-neutral-700 bg-white dark:bg-neutral-800'
      >
        <option value='all'>All Statuses</option>
        <option value='todo'>Todo</option>
        <option value='in-progress'>In Progress</option>
        <option value='done'>Done</option>
      </select>
      <select
        value={filters.priority}
        onChange={e =>
          onChange({ priority: e.target.value as TaskPriority | 'all' })
        }
        className='px-3 py-2 rounded-xl border dark:border-neutral-700 bg-white dark:bg-neutral-800'
      >
        <option value='all'>All Priorities</option>
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
      <button
        onClick={onReset}
        className='px-3 py-2 rounded-xl border dark:border-neutral-700 hover:opacity-80'
      >
        Reset
      </button>
    </div>
  );
}
