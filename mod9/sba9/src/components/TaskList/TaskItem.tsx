import type { TaskItemProps, TaskStatus } from '../../types/index';

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onUpdateStatus,
  onDelete,
  onEdit,
}) => {
  return (
    <li
      key={task.id}
      className='p-4 rounded-2xl border bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center gap-3 shadow-sm'
    >
      <div>
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>

      <div className='task-controls'>
        <select
          value={task.status}
          onChange={e => onUpdateStatus(task.id, e.target.value as TaskStatus)}
        >
          <option value='todo'>Todo</option>
          <option value='in-progress'>In Progress</option>
          <option value='done'>Done</option>
        </select>

        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
};
