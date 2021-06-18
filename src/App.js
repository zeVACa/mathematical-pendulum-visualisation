import { useState } from 'react';
import './App.css';
import { CanvasPendulum } from './components/canvasPendulum/CanvasPendulum';
import { FormConfiguration } from './components/configurationBar/FormConfiguration';
import { Description } from './components/description/Description';

function App() {
  const [length, setLength] = useState(1);
  const [weight, setWeight] = useState(1);

  return (
    <div className="App">
      <div className="container">
        <CanvasPendulum />
        <div className="canvas-info">
          <Description length={length} weight={weight} />
          <FormConfiguration setLength={setLength} setWeight={setWeight} />
        </div>
      </div>
    </div>
  );
}

export default App;
