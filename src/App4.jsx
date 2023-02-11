import React, { useState } from "react";
import "./App.css";

const Container = ({ color }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "3px solid black",
        backgroundColor: color,
      }}
    />
  );
};

const ColorSwatch = ({ color, onClick }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: color,
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const App4 = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [container1Color, setContainer1Color] = useState(null);
  const [container2Color, setContainer2Color] = useState(null);
  const [container3Color, setContainer3Color] = useState(null);

  const colorPalette = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#00ffff",
    "#ff00ff",
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleContainerClick = (setColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="main-container">
      <div className="grid--2-col">
        <Container
          color={container1Color}
          onClick={() => handleContainerClick(setContainer1Color)}
        />
        <Container
          color={container2Color}
          onClick={() => handleContainerClick(setContainer2Color)}
        />
      </div>
      <div className="grid--1-col">
        <Container
          color={container3Color}
          onClick={() => handleContainerClick(setContainer3Color)}
        />
      </div>
      <div className="palette">
        {colorPalette.map((color) => (
          <ColorSwatch color={color} onClick={() => handleColorClick(color)} />
        ))}
      </div>
    </div>
  );
};

export default App4;
