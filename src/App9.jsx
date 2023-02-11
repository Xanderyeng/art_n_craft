import React, { useState } from "react";
import "./App.css";

const Container = ({ index, color, onClick, onDrop }) => {
  return (
    <div
    className="color-box"
      onClick={() => onClick(index)}
      onDrop={(e) => onDrop(index, e)}
      onDragOver={(e) => e.preventDefault()}
      style={{
        content: "",
        border: "0.3rem solid black",
        backgroundColor: color,
      }}
    />
  );
};

const Palette = ({ colors, onClick, onMouseDown }) => {
  return (
    <div className='palette-container centering'>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => onClick(color)}
          onMouseDown={(e) => onMouseDown(color, e)}
          draggable
          style={{
            backgroundColor: color,
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
};

const App9 = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [dragging, setDragging] = useState(false);
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

  const mixColors = (color1, color2) => {
    if (!color1 || !color2) {
      return null;
    }
    const color1Rgb = hexToRgb(color1);
    const color2Rgb = hexToRgb(color2);
    const mixedRgb = {
      red: (color1Rgb.red + color2Rgb.red) / 2,
      green: (color1Rgb.green + color2Rgb.green) / 2,
      blue: (color1Rgb.blue + color2Rgb.blue) / 2,
    };
    return rgbToHex(mixedRgb);
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          red: parseInt(result[1], 16),
          green: parseInt(result[2], 16),
          blue: parseInt(result[3], 16),
        }
      : null;
  };

  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const rgbToHex = (rgb) => {
    return (
      "#" +
      componentToHex(rgb.red) +
      componentToHex(rgb.green) +
      componentToHex(rgb.blue)
    );
  };

  const handleDrop = (index, e) => {
    setDragging(false);
    switch (index) {
      case 1:
        setColor1(
          color1 === "" ? selectedColor : mixColors(color1, selectedColor)
        );
        break;
      case 2:
        setColor2(
          color2 === "" ? selectedColor : mixColors(color2, selectedColor)
        );
        break;
      case 3:
        setColor3(
          color3 === "" ? selectedColor : mixColors(color3, selectedColor)
        );
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
      className='container'
      onMouseMove={(e) => {
        if (dragging) {
          handleMouseMove(e);
        }
      }}
      onMouseUp={handleMouseUp}
    >
      <div className='main-container'>
        <div className='grid--2-col'>
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
          </div>
          <div className='grid--1-col'>
            <Container
              index={3}
              color={color3}
              onClick={handleContainerClick}
              onDrop={handleDrop}
            />
        </div>
      </div>
      <Palette
        colors={["red", "green", "blue", "purple", "yellow", "pink"]}
        onClick={handlePaletteClick}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default App9;
