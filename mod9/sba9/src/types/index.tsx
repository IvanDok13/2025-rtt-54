export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskActionsProps {
  onUpdateStatus: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export interface TaskItemProps extends TaskActionsProps {
  task: Task;
}

export interface TaskListProps extends TaskActionsProps {
  tasks: Task[];
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export interface StatsProps {
  tasks: Task[];
}

export interface FormDataShape {
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
}

export interface TaskFormProps {
  onSubmit: (data: FormDataShape) => void;
}

export interface FilterOptions {
  query: string;
  status: TaskStatus | 'all';
  priority: TaskPriority | 'all';
  sortBy: 'createdAt' | 'updatedAt' | 'dueDate' | 'priority' | 'title';
  sortDir: 'asc' | 'desc';
}

export interface TaskFilterProps {
  filters: FilterOptions;
  onChange: (filters: Partial<FilterOptions>) => void;
  onReset: () => void;
}

export interface MainProps {
  tasks: Task[];
  filters: FilterOptions;
  onAdd: (data: FormDataShape) => void;
  onUpdate: (id: string, patch: Partial<Task>) => void;
  onDelete: (id: string) => void;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  onResetFilters: () => void;
}
