import './App.css';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  return (
    <>
      <h1>Lab 9.2</h1>
      <CharacterCounter minWords={20} maxWords={100} targetReadingTime={2} />
    </>
  );
}

export default App;
