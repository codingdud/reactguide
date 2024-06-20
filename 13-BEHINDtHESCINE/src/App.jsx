import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigerCounter from './components/ConfigerCounter.jsx';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);
  function handleSelectCount(newCount){
    setChosenCount(newCount)
    setChosenCount(prev=>prev+1)
    console.log(chosenCount)
  }
  
  return (
    <>
      <Header />
      <main>
        <ConfigerCounter onSet={handleSelectCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
