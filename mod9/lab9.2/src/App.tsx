import './App.css';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { TextInput } from './components/TextInput/TextInput';

function App() {
  return (
    <>
      <h1>Lab 9.2</h1>
      <TextInput
        onTextChange={text => {
          console.log('Text changed:', text);
        }}
        placeholder='Type your text here...'
        initialValue='Hello, world!'
      />
      <StatsDisplay
        stats={{ characterCount: 100, wordCount: 20, readingTime: 1 }}
        showReadingTime={true}
      />
    </>
  );
}

export default App;
