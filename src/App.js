import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("#ffffff");

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };

  return (
    <div className="App">
      <h1>Color Generator</h1>
      <div
        className="ColorBox"
        style={{ backgroundColor: color }}
        onClick={generateRandomColor}
      >
        <p>{color}</p>
      </div>
    </div>
  );
};

export default App;
