import { useState, useEffect } from 'react';
import './App.css';
import { CanvasPendulum } from './components/canvasPendulum/CanvasPendulum';
import { FormConfiguration } from './components/configurationBar/FormConfiguration';
import { Description } from './components/description/Description';

function App() {
  const [isRightDirection, setIsRightDirection] = useState(true);

  return (
    <div className="App">
      <div className="container">
        <CanvasPendulum
          isRightDirection={isRightDirection}
          setIsRightDirection={setIsRightDirection}
        />
        <div className="canvas-info">
          <Description />
          <FormConfiguration />
        </div>
      </div>
    </div>
  );
}

export default App;
