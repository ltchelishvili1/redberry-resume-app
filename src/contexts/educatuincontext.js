import { createContext, useEffect, useState } from "react";

export const EducationContext = createContext({
  educationState: [],
  educationStateChanger: () => {},
  count: 0,
  setCount: () => {},
  validateFinalForm: () => {},
});



export const EducationContextProvider = ({ children }) => {
  const [educationState, setEducationState] = useState(
    JSON.parse(localStorage.getItem("educationState")) || []
  );

  const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem("educationState", JSON.stringify(educationState));
  }, [educationState]);

  const educationStateChanger = (vals, count) => {
    let arr = [...educationState];
    if (vals.name === "") return;
 
    arr[count] = {
      ...arr[count],
      [vals.name]: {
        ...vals,
      },
    };

    
    setEducationState(arr);
  };

  const validateFinalForm = (amountOfFormInputs) => {
    
    return !educationState[count] ||
      Object.keys(educationState[count]).length < amountOfFormInputs
      ? false
      : Object.keys(educationState[count])
          .map((key) => educationState[count][key].isValid)
          .every((el) => el === true);
  };

  const value = {
    educationState,
    educationStateChanger,
    count,
    setCount,
    validateFinalForm,
  };
  return (
    <EducationContext.Provider value={value}>
      {children}
    </EducationContext.Provider>
  );
};
