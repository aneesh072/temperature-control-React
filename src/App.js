import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemp = () => {
    if (temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 15) {
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemp = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 15) {
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemperature);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decreaseTemp()}>-</button>
      </div>
    </div>
  );
};

export default App;
