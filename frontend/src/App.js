import "./App.css";
import React from "react";
import { DisplayPDF } from "./Components/DisplayPDF";
import { UploadFile } from "./Components/UploadFile";

function App() {
  return (
    <div className="App">
      <UploadFile />
      <DisplayPDF />
    </div>
  );
}

export default App;
