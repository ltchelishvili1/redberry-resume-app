import React from "react";

import { Route, Routes, Navigate, Link, useLocation } from "react-router-dom";
import EducationPage from "./routes/educationpage/education-page.component";
import ExperiencePage from "./routes/experiencepage/experiencepage.component";
import FillResume from "./routes/fillresume/fillresume-component";
import PersonalInfoPage from "./routes/personalinfopage/personalinfopage-component";

import WelcomePage from "./routes/welcomepage/welcomepage-component";

const App = () => {
  let routes = (
    <Routes>
      <Route exact path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/fill-resume" element={<FillResume />}>
        <Route path="page=personal-info" index element={<PersonalInfoPage />} />
        <Route path="page=experience" element={<ExperiencePage />} />
        <Route path="page=knowledge" element={<EducationPage />} />
      </Route>
    </Routes>
  );
  return <div>{routes}</div>;
};

export default App;
