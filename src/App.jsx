import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [isEditMode, setIsEditMode] = useState(true);

  const [cvData, setCvData] = useState({
    general: { name: "", email: "", phone: "" },
    education: { school: "", title: "", date: "" },
    experience: {
      company: "",
      position: "",
      responsibilities: "",
      duration: "",
    },
  });

  const updateCvData = (section, data) => {
    setCvData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const toggleMode = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CV Application</h1>
        <button onClick={toggleMode} className="global-toggle-btn">
          {isEditMode ? "Preview CV" : "Edit CV"}
        </button>
      </header>

      <main>
        <GeneralInfo
          data={cvData.general}
          onChange={(data) => updateCvData("general", data)}
          isEditMode={isEditMode}
        />

        <Education
          data={cvData.education}
          onChange={(data) => updateCvData("education", data)}
          isEditMode={isEditMode}
        />

        <Experience
          data={cvData.experience}
          onChange={(data) => updateCvData("experience", data)}
          isEditMode={isEditMode}
        />
      </main>
    </div>
  );
}

export default App;
