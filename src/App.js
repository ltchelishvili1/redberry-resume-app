import React, { useContext } from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import { EducationContext } from "./contexts/educatuincontext";

import DisplayPage from "./components/displaypage/displaypage-component";
import EducationPage from "./routes/educationpage/education-page.component";
import ExperiencePage from "./routes/experiencepage/experiencepage.component";
import FillResume from "./routes/fillresume/fillresume-component";
import PersonalInfoPage from "./routes/personalinfopage/personalinfopage-component";
import WelcomePage from "./routes/welcomepage/welcomepage-component";

const App = () => {
  const { status, responseData } = useContext(EducationContext);

  let routes = (
    <Routes>
      <Route exact path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/fill-resume" element={<FillResume />}>
        <Route path="page=personal-info" index element={<PersonalInfoPage />} />
        <Route path="page=experience" element={<ExperiencePage />} />
        <Route path="page=knowledge" element={<EducationPage />} />
      </Route>
      {true && (
        <Route
          path="/cv-created"
          element={
            <DisplayPage wholePage success responseData={responseData} />
          }
        />
      )}
    </Routes>
  );
  return <div>{routes}</div>;
};

export default App;
