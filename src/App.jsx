import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <div>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
