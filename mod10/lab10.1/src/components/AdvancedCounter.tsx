import { useCallback, useEffect, useState } from 'react';
import { loadArray, loadNumber } from '../utils/localStorageHelpers';

export function AdvancedCounter() {
  const [count, setCount] = useState(() => loadNumber('count', 0));
  const [step, setStep] = useState(() => loadNumber('step', 1));
  const [history, setHistory] = useState<number[]>(() =>
    loadArray('countHistory')
  );
  const [saving, setSaving] = useState<boolean>(false);

  const handleIncrement = useCallback(() => {
    const newValue = count + step;
    setHistory(prev => [...prev, newValue]);
    setCount(newValue);
  }, [count, step]);

  const handleDecrement = useCallback(() => {
    const newValue = count - step;
    setHistory(prev => [...prev, newValue]);
    setCount(newValue);
  }, [count, step]);

  // ========== manage history, Auto-save to local storage

  // useEffect(() => {
  //   setHistory(prevCountHistory =>
  //     prevCountHistory.length > 0 && prevCountHistory.at(-1) === count
  //       ? prevCountHistory
  //       : [...prevCountHistory, count]
  //   );
  // }, [count]);

  useEffect(() => {
    localStorage.setItem('count', String(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem('step', String(step));
  }, [step]);

  useEffect(() => {
    setSaving(true);

    const timeout = setTimeout(() => {
      localStorage.setItem('countHistory', JSON.stringify(history));
      setSaving(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [history]);

  // ========== Keyboard shortcuts ===========

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') handleIncrement();
      if (event.key === 'ArrowDown') handleDecrement();
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleIncrement, handleDecrement]);

  const handleReset = () => {
    setCount(0);
    setHistory([]);
    setStep(1);
    localStorage.clear();
  };

  return (
    <div>
      <h2>Advanced Counter Component</h2>

      <h2>Current Count: {count}</h2>

      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>

        <label>
          Step Value:
          <input
            type='number'
            value={step}
            onChange={e => setStep(+e.target.value)}
          />
        </label>
        {saving && <p>Saving...</p>}

        <div>
          <h3>Count History: {history.join(', ')}</h3>
          <hr />
          <span>Use ArrowUp to increment and ArrowDown to decrement.</span>
        </div>
      </div>
    </div>
  );
}
