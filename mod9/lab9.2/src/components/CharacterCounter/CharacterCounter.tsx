import { useState } from 'react';
import type { CharacterCounterProps } from '../../types';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import { TextInput } from '../TextInput/TextInput';

export function CharacterCounter({
  minWords = 0,
  maxWords = Infinity,
  targetReadingTime = 0,
}: CharacterCounterProps) {
  const [text, setText] = useState('');
  // const [wordGoal, setWordGoal] = useState(100);

  const handleChange = (newText: string) => {
    setText(newText);
  };

  const calculateStats = (text: string) => {
    const characterCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  return (
    <div className='p-4 border border-gray-300 rounded-lg bg-gray-50'>
      <StatsDisplay stats={calculateStats(text)} />

      <h2 className='text-xl font-semibold mb-4'>Character Counter Settings</h2>
      <ul className='space-y-2'>
        <li>
          <strong>Minimum Words:</strong> {minWords}
        </li>
        <li>
          <strong>Maximum Words:</strong>{' '}
          {maxWords === Infinity ? 'No limit' : maxWords}
        </li>
        <li>
          <strong>Target Reading Time:</strong>{' '}
          {targetReadingTime === 0
            ? 'No target'
            : `${targetReadingTime} minute${
                targetReadingTime !== 1 ? 's' : ''
              }`}
        </li>
      </ul>

      <TextInput
        onTextChange={handleChange}
        initialValue={text}
        placeholder={'Type something...'}
      />
    </div>
  );
}
