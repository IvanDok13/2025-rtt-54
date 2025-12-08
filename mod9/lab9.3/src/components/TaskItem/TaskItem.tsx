import { useState } from 'react';
import type { Priority, TaskItemProps, TaskStatus } from '../../types/index';

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const [currentStatus, setCurrentStatus] = useState(task.status);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value as TaskStatus);
    onStatusChange(task.id, e.target.value as TaskStatus);
  };

  const statusStyles: { [key in TaskStatus]: string } = {
    pending: 'text-yellow-500',
    'in-progress': 'text-blue-500',
    completed: 'text-green-500',
  };

  const priorityStyles: { [key in Priority]: string } = {
    low: 'text-yellow-500',
    medium: 'text-blue-500',
    high: 'text-red-500',
  };
  return (
    <div
      key={task.id}
      className='mb-5 grid grid-cols-2 bg-zinc-800 p-5 rounded-lg gap-2 center'
    >
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-semibold'>{task.title}</div>
        <div className='text-sm'>{task.description}</div>
        <div className='text-sm opacity-70'>
          Priority:{' '}
          <span className={priorityStyles[task.priority]}>{task.priority}</span>
        </div>
        <div className='text-sm opacity-40'>Due Date: {task.dueDate}</div>
      </div>

      <div className='flex flex-col gap-2'>
        <select
          value={currentStatus}
          onChange={handleChange}
          className={`ml-auto bg-zinc-900 h-10 px-3  rounded  ${statusStyles[currentStatus]}`}
        >
          <option value='pending'>Pending</option>
          <option value='in-progress'>In Progress</option>
          <option value='completed'>Completed</option>
        </select>
      </div>

      <div className='flex gap-2'>
        <button className='bg-zinc-900 hover:bg-zinc-700 p-2 rounded'>
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className='bg-zinc-900 hover:bg-zinc-700 p-2 rounded'
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
