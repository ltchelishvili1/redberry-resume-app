import { createContext, useEffect, useState } from "react";

export const EducationContext = createContext({
  educationState: [],
  educationStateChanger: () => {},
  count: 0,
  setCount: () => {},
  validatedFinalForm: () => {},
  degrees: [],
  setDegrees: () => {},
  status: 0,
  setStatus: () => {},
  responseData: {},
  setResponseData: () => {},
 
});

const initialState = JSON.parse(localStorage.getItem("educationState")) || [];
const initialStatus = JSON.parse(localStorage.getItem("initialStatus")) || 0;
const initialResponse = JSON.parse(localStorage.getItem("responseData")) || {};
const initialDegrees = JSON.parse(localStorage.getItem("degrees")) || [];

export const EducationContextProvider = ({ children }) => {
  const [degrees, setDegrees] = useState(initialDegrees);
  const [educationState, setEducationState] = useState(initialState);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(initialStatus);
  const [responseData, setResponseData] = useState(initialResponse);

  useEffect(() => {
    localStorage.setItem("educationState", JSON.stringify(educationState));
  }, [educationState]);

  useEffect(() => {
    localStorage.setItem("initialStatus", JSON.stringify(status));
  }, [status]);

  useEffect(() => {
    localStorage.setItem("responseData", JSON.stringify(responseData));
  }, [responseData]);

  useEffect(() => {
    localStorage.setItem("degrees", JSON.stringify(degrees));
  }, [degrees]);


  const educationStateChanger = (vals, count) => {
    if (vals.name === "") return;

    setEducationState((prevState) => {
      const updatedEducation = [...prevState];
      updatedEducation[count] = {
        ...updatedEducation[count],
        [vals.name]: {
          ...vals,
        },
      };

      return updatedEducation;
    });
  };

  const validateFinalForm = (amountOfFormInputs) => {
    if (
      !educationState[count] ||
      Object.keys(educationState[count]).length < amountOfFormInputs
    ) {
      return false;
    }
    for (const key in educationState[count]) {
      if (!educationState[count][key].isValid) {
        return false;
      }
    }
    return true;
  };

  const value = {
    educationState,
    educationStateChanger,
    count,
    setCount,
    validateFinalForm,
    degrees,
    setDegrees,
    status,
    setStatus,
    responseData,
    setResponseData,
    
  };
  return (
    <EducationContext.Provider value={value}>
      {children}
    </EducationContext.Provider>
  );
};
