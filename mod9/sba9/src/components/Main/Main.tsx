import type { MainProps } from '../../types';
import { Stats } from '../Stats/Stats';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';

export function Main({
  tasks,
  filters,
  onAdd,
  onUpdate,
  onDelete,
  onFilterChange,
  onResetFilters,
}: MainProps) {
  return (
    <main className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <div className='lg:col-span-2 space-y-4'>
        <TaskForm onSubmit={onAdd} />
        <div className='lg:col-span-2 space-y-4'>
          <TaskFilter
            filters={filters}
            onChange={onFilterChange}
            onReset={onResetFilters}
          />
          <div className='p-4 rounded-2xl border bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 space-y-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-semibold'>Tasks</h2>
              <TaskList
                tasks={tasks}
                onUpdateStatus={(id, status) => onUpdate(id, { status })}
                onDelete={onDelete}
                onEdit={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
      <aside className='space-y-4'>
        <div className='p-4 rounded-2xl border bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800'>
          <h2 className='text-lg font-semibold mb-3'>Statistics</h2>
          <Stats tasks={tasks} />
        </div>
      </aside>
    </main>
  );
}
