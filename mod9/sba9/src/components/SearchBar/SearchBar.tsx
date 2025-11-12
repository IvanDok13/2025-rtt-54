import type { SearchBarProps } from '../../types';

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type='text'
      value={value}
      placeholder='Search tasks...'
      onChange={e => onChange(e.target.value)}
      className='flex-1 px-3 py-2 rounded-xl border dark:border-neutral-700 bg-white dark:bg-neutral-800'
    />
  );
}
