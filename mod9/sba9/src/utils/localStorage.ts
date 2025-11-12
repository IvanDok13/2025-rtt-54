import type { Task } from '../types/index';

const STORAGE_KEY = 'ts_task_dashboard_v1';

export function loadTasks(): Task[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export const saveTasks = (tasks: Task[]) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
