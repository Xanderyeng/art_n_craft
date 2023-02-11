import React, { useState, useRef } from "react";
import "./App.css";

const Container = ({ color }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "3px solid black",
        backgroundColor: color
      }}
    />
  );
};

const Palette = ({ onColorClick }) => {
  return (
    <div className="palette">
      <div
        className="color"
        style={{ backgroundColor: "red" }}
        onClick={() => onColorClick("red")}
      />
      <div
        className="color"
        style={{ backgroundColor: "green" }}
        onClick={() => onColorClick("green")}
      />
      <div
        className="color"
        style={{ backgroundColor: "blue" }}
        onClick={() => onColorClick("blue")}
      />
    </div>
  );
};

const App3 = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [colors, setColors] = useState([null, null, null]);

  const onColorClick = color => {
    setSelectedColor(color);
  };

  const handleContainerClick = index => {
    if (!selectedColor) {
      return;
    }

    const updatedColors = [...colors];
    updatedColors[index] = selectedColor;
    setColors(updatedColors);
  };

  return (
    <div className="main-container">
      <div className="grid--2-col">
        <div
          className="container-wrapper"
          onClick={() => handleContainerClick(0)}
        >
          <Container color={colors[0]} />
        </div>
        <div
          className="container-wrapper"
          onClick={() => handleContainerClick(1)}
        >
          <Container color={colors[1]} />
        </div>
      </div>
      <div className="grid--1-col">
        <div
          className="container-wrapper"
          onClick={() => handleContainerClick(2)}
        >
          <Container color={colors[2]} />
        </div>
      </div>
      <Palette onColorClick={onColorClick} />
    </div>
  );
};

export default App3;
