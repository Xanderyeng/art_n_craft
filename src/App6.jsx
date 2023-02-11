import React, { useState, useRef } from "react";
import "./App.css";

const Container = ({ color, onClick }) => {
  return (
    <div
    className="color-box"
      onClick={onClick}
      style={{
        // width: "30%",
        // height: "30vh",
        content: "",
        border: "3px solid black",
        backgroundColor: color,
      }}
    //   onDrop='drop(event)'
    //   onDragOver='allowDrop(event)'
    //   onDragEnter='dragEnter(2)'
    />
  );
};

const Palette = ({ colors, onClick }) => {
  return (
    <div className='palette-container'>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => onClick(color)}
          style={{
            backgroundColor: color,
            width: "50px",
            height: "50px",
            marginBottom: "5px",
            display: "inline-block",
            marginRight: "10px",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
};

const App6 = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [dragging, setDragging] = useState(false);
  const [draggedColor, setDraggedColor] = useState("");
  const containerRef = useRef(null);

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

  const handleMouseDown = (color) => {
    setDragging(true);
    setDraggedColor(color);
  };

  const handleMouseUp = (e) => {
    setDragging(false);
    setDraggedColor("");
    const { x, y } = e.nativeEvent;
    const containerRect = containerRef.current.getBoundingClientRect();
    if (
      x >= containerRect.left &&
      x <= containerRect.right &&
      y >= containerRect.top &&
      y <= containerRect.bottom
    ) {
      handleContainerClick(3);
    }
  };

  return (
    <div className='container'>
      <div className='main-container'>
        <div className='grid--2-col'>
          <Container color={color1} onClick={() => handleContainerClick(1)} />
          <Container color={color2} onClick={() => handleContainerClick(2)} />
        </div>
        <div className='grid--1-col'>
          <Container color={color3} onClick={() => handleContainerClick(3)} />
        </div>
      </div>
      <Palette
        colors={["red", "green", "blue", "purple", "yellow", "orange"]}
        onClick={handlePaletteClick}
      />
      {dragging && (
        <div
          className='drag-swatch'
          style={{
            backgroundColor: selectedColor,
            width: "50px",
            height: "50px",
            position: "fixed",
            top: mouseY - 25,
            left: mouseX - 25,
          }}
        />
      )}
    </div>
  );
};

export default App6;
