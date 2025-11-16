import type { ProgressIndicatorProps } from '../../types';

export const ProgressIndicator = ({
  currentCount = 0,
  goal = 100,
  onGoalChange,
  type = 'words',
}: ProgressIndicatorProps) => {
  const progress = Math.min((currentCount / goal) * 100, 100);
  const isComplete = currentCount === goal ? true : false;

  const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGoal = parseInt(event.target.value) || 0;
    if (newGoal >= 0) {
      onGoalChange(newGoal);
    }
  };

  return (
    <div>
      <div>
        <h4>Progress Towards Goal</h4>
        <div>
          <label>Goal: </label>
          <input
            type='number'
            value={goal}
            onChange={handleGoalChange}
            min='1'
          />
          <span> {type}</span>
        </div>
      </div>

      <div>
        <div></div>
      </div>

      <div>
        {currentCount} / {goal} {type} ({Math.round(progress)}%)
      </div>

      {isComplete && (
        <div className='text-green-500'> Goal achieved! Well done!</div>
      )}

      <div>
        <progress value={progress} max='100'></progress>
      </div>
    </div>
  );
};

export default ProgressIndicator;
