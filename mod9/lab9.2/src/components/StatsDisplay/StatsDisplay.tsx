import type { StatsDisplayProps } from '../../types';

export function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  return (
    <div className='p-4 border border-gray-300 rounded-lg bg-gray-50'>
      <h2 className='text-xl font-semibold mb-4'>Text Statistics</h2>
      <ul className='space-y-2'>
        <li>
          <strong>Character Count:</strong> {stats.characterCount}
        </li>
        <li>
          <strong>Word Count:</strong> {stats.wordCount}
        </li>
        {showReadingTime && (
          <li>
            <strong>Estimated Reading Time:</strong> {stats.readingTime} minute
            {stats.readingTime !== 1 ? 's' : ''}
          </li>
        )}
      </ul>
    </div>
  );
}
