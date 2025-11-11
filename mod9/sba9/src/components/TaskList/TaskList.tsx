import type { TaskListProps } from '../../types/index';
import { TaskItem } from './TaskItem';

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onUpdateStatus,
  onDelete,
  onEdit,
}) => {
  return (
    <ul className='space-y-2'>
      {tasks.map(t => (
        <TaskItem
          key={t.id}
          task={t}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};
