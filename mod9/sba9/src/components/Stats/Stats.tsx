import type { StatsProps } from '../../types/index';

export function Stats({ tasks }: StatsProps) {
  const total = tasks.length;
  const done = tasks.filter(t => t.status === 'done').length;
  const inProgress = tasks.filter(t => t.status === 'in-progress').length;
  const todo = tasks.filter(t => t.status === 'todo').length;

  return (
    <div className='stats'>
      <p>Total: {total}</p>
      <p>Todo: {todo}</p>
      <p>In Progress: {inProgress}</p>
      <p>Done: {done}</p>
    </div>
  );
}
