import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { FormContextProvider } from "./contexts/formcontext";
import { ExperienceContextProvider } from "./contexts/experiencecontext";
import { EducationContextProvider } from "./contexts/educatuincontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <ExperienceContextProvider>
        <EducationContextProvider>
          <Router>
            <App />
          </Router>
        </EducationContextProvider>
      </ExperienceContextProvider>
    </FormContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
