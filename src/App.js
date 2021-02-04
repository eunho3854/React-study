import { useState } from 'react';
import Bottom from './components/Bottom';
import Top from './components/Top';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <Top number={number} />
      <Bottom number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
