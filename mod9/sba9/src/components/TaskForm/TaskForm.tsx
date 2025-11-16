import { useState } from 'react';
import type { FormDataShape, TaskFormProps } from '../../types';

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [form, setForm] = useState<FormDataShape>({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    dueDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      title: '',
      description: '',
      status: 'todo',
      priority: 'medium',
      dueDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-3'>
      <div>
        <label htmlFor='title' className='block text-sm mb-1'>
          Title
        </label>
        <input
          id='title'
          name='title'
          value={form.title}
          onChange={handleChange}
          placeholder='Task title'
          required
          className='w-full px-3 py-2 rounded-xl border dark:border-neutral-700 bg-white dark:bg-neutral-800'
        />
      </div>

      <div>
        <label className='block text-sm mb-1'>Description</label>
        <textarea
          name='description'
          value={form.description}
          onChange={handleChange}
          placeholder='Description'
          className='w-full px-3 py-2 rounded-xl border dark:border-neutral-700 bg-white dark:bg-neutral-800'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
        <div>
          <label className='block text-sm mb-1'>Status</label>
          <select name='status' value={form.status} onChange={handleChange}>
            <option value='todo'>Todo</option>
            <option value='in-progress'>In Progress</option>
            <option value='done'>Done</option>
          </select>
        </div>

        <div>
          <label className='block text-sm mb-1'>Priority</label>
          <select name='priority' value={form.priority} onChange={handleChange}>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div>

        <div>
          <label className='block text-sm mb-1'>Due Date</label>
          <input
            type='date'
            name='dueDate'
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <button type='submit'>Add Task</button>
      </div>
    </form>
  );
}
