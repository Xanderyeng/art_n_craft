import React, { useState, useRef } from "react";
import "./App.css";

const Container = ({ color, onDrop }) => {
  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{
        width: "300px",
        height: "300px",
        border: "3px solid black",
        backgroundColor: color || "transparent",
      }}
    />
  );
};

const Palette = ({ onPick }) => {
  return (
    <div className='palette'>
      {/* Add the colors here */}
      <div
        onClick={() => onPick("red")}
        onDragStart={(e) => e.dataTransfer.setData("color", "red")}
        className='palette-color'
        style={{ backgroundColor: "red" }}
      />
      <div
        onClick={() => onPick("blue")}
        onDragStart={(e) => e.dataTransfer.setData("color", "blue")}
        className='palette-color'
        style={{ backgroundColor: "blue" }}
      />
      <div
        onClick={() => onPick("green")}
        onDragStart={(e) => e.dataTransfer.setData("color", "green")}
        className='palette-color'
        style={{ backgroundColor: "green" }}
      />
    </div>
  );
};

const App2 = () => {
  const [colors, setColors] = useState({});
  const [dragging, setDragging] = useState(null);
  const dragContainerRef = useRef();

  const onPick = (color) => {
    setDragging(color);
  };

  const onDrop = (e, containerId) => {
    e.preventDefault();
    const color = e.dataTransfer.getData("color");
    setColors({
      ...colors,
      [containerId]: color,
    });
  };

  const onMouseUp = (e) => {
    setDragging(null);
  };

  return (
    <div
      className='main-container'
      onMouseUp={onMouseUp}
      ref={dragContainerRef}
    >
      <div className='grid--2-col'>
        <Container
          onDrop={(e) => onDrop(e, "container1")}
          color={colors.container1}
        />
        <Container
          onDrop={(e) => onDrop(e, "container2")}
          color={colors.container2}
        />
      </div>
      <div className='grid--1-col'>
        <Container
          onDrop={(e) => onDrop(e, "container3")}
          color={colors.container3}
        />
      </div>
      <Palette onPick={onPick} />

    </div>
  );
};
export default App2;
