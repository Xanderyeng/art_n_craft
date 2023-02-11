import React, { useState, useRef } from "react";
import "./App.css";

const Container = ({ color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "300px",
        height: "300px",
        border: "3px solid black",
        backgroundColor: color,
      }}
    />
  );
};

const Palette = ({ colors, onClick }) => {
  return (
    <div className="palette">
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => onClick(color)}
          style={{
            backgroundColor: color,
            width: "50px",
            height: "50px",
            display: "inline-block",
            marginRight: "10px",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
};

const App5 = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [dragging, setDragging] = useState(false);

  const handleContainerClick = (index) => {
    switch (index) {
      case 1:
        setColor1(selectedColor);
        break;
      case 2:
        setColor2(selectedColor);
        break;
      case 3:
        setColor3(selectedColor);
        break;
      default:
        break;
    }
  };

  const handlePaletteClick = (color) => {
    setSelectedColor(color);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseUp = (e) => {
    setDragging(false);
  };

  return (
    <div className="main-container">
      <div className="grid--2-col">
        <Container color={color1} onClick={() => handleContainerClick(1)} />
        <Container color={color2} onClick={() => handleContainerClick(2)} />
      </div>
      <div className="grid--1-col">
        <Container color={color3} onClick={() => handleContainerClick(3)} />
      </div>
      <Palette
        colors={["red", "green", "blue", "purple", "yellow", "orange"]}
        onClick={handlePaletteClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
};

export default App5;
