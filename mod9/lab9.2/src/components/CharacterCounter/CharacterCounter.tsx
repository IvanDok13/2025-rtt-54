import { useState } from 'react';
import type { CharacterCounterProps } from '../../types';
import { WORDS_PER_MINUTE } from '../../utils/const';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import { TextInput } from '../TextInput/TextInput';

export function CharacterCounter({
  minWords = 0,
  maxWords = Infinity,
}: CharacterCounterProps) {
  const [text, setText] = useState('');
  const [wordGoal, setWordGoal] = useState(100);

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleGoalChange = (maxWords: number) => {
    setWordGoal(maxWords);
  };

  const calculateStats = (text: string) => {
    const characterCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const readingTime = Math.ceil(wordCount / WORDS_PER_MINUTE);

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  const { wordCount } = calculateStats(text);

  return (
    <div className='p-4 border border-gray-300 rounded-lg bg-gray-50'>
      <div className='mb-4'>
        <TextInput
          onTextChange={handleTextChange}
          initialValue={text}
          placeholder={'Type something...'}
        />
      </div>
      <StatsDisplay stats={calculateStats(text)} />
      <ProgressIndicator
        currentCount={wordCount}
        goal={wordGoal}
        onGoalChange={handleGoalChange}
      />
      <div className='flex flex-row justify-center gap-4 text-center'>
        <p>
          <strong>Min:</strong> {minWords}
        </p>
        <p>
          <strong>Max:</strong> {maxWords}
        </p>
      </div>
    </div>
  );
}
