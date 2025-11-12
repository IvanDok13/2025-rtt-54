import { useEffect, useState } from 'react';
import type { FilterOptions, FormDataShape, Task } from '../../types/index';
import { loadTasks, saveTasks } from '../../utils/localStorage';
import { filterTasks, sortTasks } from '../../utils/taskUtils';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

export function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  const [filters, setFilters] = useState<FilterOptions>({
    query: '',
    status: 'all',
    priority: 'all',
    sortBy: 'updatedAt',
    sortDir: 'desc',
  });

  useEffect(() => saveTasks(tasks), [tasks]);

  const addTask = (data: FormDataShape) => {
    const now = new Date().toISOString();
    const newTask: Task = {
      id: Math.random().toString(36).slice(2),
      title: data.title,
      description: data.description,
      status: data.status,
      priority: data.priority,
      dueDate: data.dueDate,
      createdAt: now,
      updatedAt: now,
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const updateTask = (id: string, patch: Partial<Task>) =>
    setTasks(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, ...patch, updatedAt: new Date().toISOString() }
          : t
      )
    );

  const deleteTask = (id: string) =>
    setTasks(prev => prev.filter(t => t.id !== id));
  const handleFilterChange = (f: Partial<FilterOptions>) =>
    setFilters(prev => ({ ...prev, ...f }));
  const resetFilters = () =>
    setFilters({
      query: '',
      status: 'all',
      priority: 'all',
      sortBy: 'updatedAt',
      sortDir: 'desc',
    });

  const visibleTasks = sortTasks(
    filterTasks(tasks, filters),
    filters.sortBy,
    filters.sortDir
  );

  return (
    <div className='min-h-screen transition-colors bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100'>
      <div className='max-w-5xl mx-auto p-4 sm:p-6 space-y-4'>
        <Header />
        <Main
          tasks={visibleTasks}
          filters={filters}
          onAdd={addTask}
          onUpdate={updateTask}
          onDelete={deleteTask}
          onFilterChange={handleFilterChange}
          onResetFilters={resetFilters}
        />
        <Footer />
      </div>
    </div>
  );
}
