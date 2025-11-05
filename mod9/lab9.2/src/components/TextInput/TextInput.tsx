// Create a TextInput component that handles user input and communicates changes to its parent.

import type { ChangeEvent } from 'react';
import type { TextInputProps } from '../../types';

export const TextInput = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = '',
}: TextInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);
  };

  return (
    <div className='w-full'>
      <textarea
        className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={handleChange}
        rows={6}
      />
    </div>
  );
};
