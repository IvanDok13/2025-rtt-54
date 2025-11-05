import type { StatsDisplayProps } from '../../types';

export function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  const { characterCount, wordCount, readingTime } = stats;

  return (
    <div className='p-4 border border-gray-300 rounded-lg bg-gray-50'>
      <h2 className='text-xl font-semibold mb-4'>Stats Display</h2>
      <ul className='space-y-2'>
        <li>
          <strong>Character Count:</strong> {characterCount}
        </li>
        <li>
          <strong>Word Count:</strong> {wordCount}
        </li>
        {showReadingTime && (
          <li>
            <strong>Estimated Reading Time:</strong> {readingTime} minutes
            {readingTime !== 1 ? 's' : ''}
          </li>
        )}
      </ul>
    </div>
  );
}
