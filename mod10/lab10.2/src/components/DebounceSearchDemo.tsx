import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

function DebounceSearchDemo() {
  const [text, setText] = useState('');
  const [delay, setDelay] = useState(500);
  const debouncedValue = useDebounce(text, delay);
  return (
    <div>
      <h3>Debounce Search Demo</h3>

      <label htmlFor='delay'>Debounce Delay (ms): </label>
      <input
        id='delay'
        name='delay'
        type='number'
        value={delay}
        min={1}
        onChange={e => setDelay(parseInt(e.target.value))}
      />
      <br />
      <input
        placeholder='Search'
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <div>Current Input: {text}</div>
      <div>
        `Debounced (after {delay}ms): {debouncedValue}`
      </div>
      <div>`Debounced Value 2: {debouncedValue}`</div>
      <div>`Debounced Value 3: {debouncedValue}`</div>
    </div>
  );
}

export default DebounceSearchDemo;
