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
});

const initialState = JSON.parse(localStorage.getItem("educationState")) || [];

export const EducationContextProvider = ({ children }) => {
  const [degrees, setDegrees] = useState([]);
  const [educationState, setEducationState] = useState(initialState);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    localStorage.setItem("educationState", JSON.stringify(educationState));
  }, [educationState]);

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
  };
  return (
    <EducationContext.Provider value={value}>
      {children}
    </EducationContext.Provider>
  );
};
