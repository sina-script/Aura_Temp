import React, { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState(20);

  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="app-container">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="glass-card">
        <header className="header">
          <span className="title">Aura Temp</span>
        </header>

        <div className="display-section">
          <div className="temp-circle">
            <div className="temp-glow"></div>

            <div className="temp-icon-wrapper">
              <img
                src={
                  temp > 15
                    ? "./public/Images/warm.png"
                    : temp > 0
                      ? "./public/Images/cloudy.png"
                      : "./public/Images/cold.png"
                }
                alt="temp icon"
              />
            </div>

            <h1 className="temp-value">
              {temp}
              <span className="unit">°C</span>
            </h1>
          </div>
        </div>

        <div className="controls-section">
          <div className="control-btn decrease" onClick={decreaseTemp}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Decrease Temp</span>
          </div>

          <div className="control-btn increase" onClick={increaseTemp}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Increase Temp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
