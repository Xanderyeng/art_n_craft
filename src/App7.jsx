import React, { useState, useRef } from "react";
import "./App.css";

const Container = ({ color, onClick, onDrop }) => {
  return (
    <div
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{
        width: "300px",
        height: "300px",
        border: "3px solid black",
        backgroundColor: color,
      }}
    />
  );
};

const Palette = ({ colors, onClick, onMouseDown }) => {
  return (
    <div className='palette'>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => onClick(color)}
          onMouseDown={(e) => onMouseDown(color, e)}
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

const App7 = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [dragging, setDragging] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

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

  const handleMouseDown = (color, e) => {
    setSelectedColor(color);
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleDrop = (index) => {
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
    setDragging(false);
  };

  const containerRef = useRef();

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ position: "relative", height: "100vh" }}
    >
      <Palette
        colors={["red", "green", "blue", "yellow", "purple"]}
        onClick={handlePaletteClick}
        onMouseDown={handleMouseDown}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "50%",
        }}
      >
        <Container
          color={color1}
          onClick={() => handleContainerClick(1)}
          onDrop={() => handleDrop(1)}
        />
        <Container
          color={color2}
          onClick={() => handleContainerClick(2)}
          onDrop={() => handleDrop(2)}
        />
        <Container
          color={color3}
          onClick={() => handleContainerClick(3)}
          onDrop={() => handleDrop(3)}
        />
      </div>
      {dragging && (
        <div
          style={{
            position: "absolute",
            left: mouseX,
            top: mouseY,
            backgroundColor: selectedColor,
            width: "50px",
            height: "50px",
          }}
        />
      )}
    </div>
  );
};

export default App7;
