import "./App.css";
import Newtask from "./Components/Newtask";
import { BrowserRouter } from "react-router-dom";
// import React from "react";
function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="box">
        <Newtask />
      </div>
    </BrowserRouter>
  );
}

export default App;
