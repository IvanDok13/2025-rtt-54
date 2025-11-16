import type { TaskListProps } from '../../types/index';
import { TaskItem } from './TaskItem';

export function TaskList({
  tasks,
  onUpdateStatus,
  onDelete,
  onEdit,
}: TaskListProps) {
  return (
    <ul className='space-y-2'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
