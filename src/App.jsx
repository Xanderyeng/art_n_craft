import React from "react";
import "./App.css";
const Container = () => {
  return (
    <div
      style={{ width: "300px", height: "300px", border: "3px solid black" }}
    />
  );
};

const Palette = ({ colors }) => {
  return (
    <div className="palette-container centering">
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            background: color,
            height: "50px",
            width: "50px",
            // display: "flex",
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  // const colors = ["red", "orange"];

  return (
    <div className="container">
      <div className='main-container'>
        <div className='grid--2-col'>
          <Container />
          <Container />
        </div>
        <div className='grid--1-col'>
          <Container />
        </div>
      </div>
      {/* <div className="palette-container">
      </div> */}
        <Palette colors={colors} />
    </div>
  );
};
export default App;
