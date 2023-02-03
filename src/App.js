import React from "react";

import { Route, Routes, Navigate, Link, useLocation } from "react-router-dom";

import WelcomePage from "./routes/welcomepage/welcomepage-component";


const App = () => {
  let routes = (
    <Routes>
      <Route exact path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/register" element={<p>342</p>} />
    </Routes>
  );
  return <div>

    {routes}</div>;
};

export default App;
