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
