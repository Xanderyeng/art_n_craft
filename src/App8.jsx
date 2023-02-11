import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const Container = ({ index, color, onClick, onDrop }) => {
  return (
    <div
      onClick={() => onClick(index)}
      onDrop={(e) => onDrop(index, e)}
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
          draggable
          //   ondragstart={(e) => handleDragStart(color, e)}
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

const App8 = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [dragging, setDragging] = useState(false);
  //   ADDED THIS useEffect to handle the setData error
  const [data, setData] = useState({});

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
    setData(e, color);
  };

//   const handleDragStart = (color, e) => {
//     setSelectedColor(color);
//     e.dataTransfer.setData("text/plain", color);
//   };

  const handleDrop = (index, e) => {
    setDragging(false);
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

  const handleMouseMove = (e) => {
    console.log("Mouse is being moved.");
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      onMouseMove={(e) => {
        if (dragging) {
          handleMouseMove(e);
        }
      }}
      onMouseUp={handleMouseUp}
    >
      <Palette
        colors={["red", "green", "blue", "purple", "yellow", "pink"]}
        onClick={handlePaletteClick}
          onMouseDown={handleMouseDown}
        // onMouseDown={handleDragStart}
      />
      <Container
        index={1}
        color={color1}
        onClick={handleContainerClick}
        onDrop={handleDrop}
      />
      <Container
        index={2}
        color={color2}
        onClick={handleContainerClick}
        onDrop={handleDrop}
      />
      <Container
        index={3}
        color={color3}
        onClick={handleContainerClick}
        onDrop={handleDrop}
      />
    </div>
  );
};

export default App8;
