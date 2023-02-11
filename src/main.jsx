import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";
import App8 from "./App8";
import App9 from "./App9";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2/>- */}
    {/* <App3/> */}

    {/* HERE I CAN SEE BOTH THE SWATCH AND THE CONTAINERS */}
    {/* <App4/>  */}

    {/* THIS ONE WORKS !! DESIGN NEEDED TO LINE THINGS UP WELL */}
    {/* <App5 /> */}

    {/* <App6/> */}
    {/* APP 7 WORKS WITH DRAG; THE SWATCHES ARE AT THE TOP */}
    {/* <App7/> */}
    {/* APP 8 WORKING PERFECTLY !! DRAG AND DROP SMOOTH  */}
    {/* <App8/> */}
    {/* --------------------------------- */}
    <App9 />
  </React.StrictMode>
);
