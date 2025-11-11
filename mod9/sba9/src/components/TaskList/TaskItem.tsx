import type { TaskItemProps, TaskStatus } from '../../types/index';

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onUpdateStatus,
  onDelete,
  onEdit,
}) => {
  return (
    <li key={task.id} className='task-item'>
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
