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
      <input
        name='title'
        value={form.title}
        onChange={handleChange}
        placeholder='Task title'
        required
      />
      <textarea
        name='description'
        value={form.description}
        onChange={handleChange}
        placeholder='Description'
      />
      <select name='status' value={form.status} onChange={handleChange}>
        <option value='todo'>Todo</option>
        <option value='in-progress'>In Progress</option>
        <option value='done'>Done</option>
      </select>
      <select name='priority' value={form.priority} onChange={handleChange}>
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
      <input
        type='date'
        name='dueDate'
        value={form.dueDate}
        onChange={handleChange}
      />
      <button type='submit'>Add Task</button>
    </form>
  );
}
