import { createContext, useEffect, useState } from "react";

export const FormContext = createContext({
  state: {},
  stateChanger: () => {},
  validateFinalForm: () => {},
});

export const FormContextProvider = ({ children }) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("state")) || {}
  );

  
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const stateChanger = (vals) => {
    if (vals.name === "") return;
    if (vals.name === "image") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setState({
          ...state,
          [vals.name]: {
            ...vals,
            value: reader.result,
            
          },
        });
      });
      reader.readAsDataURL(vals.value);
    } else {
      setState({
        ...state,
        [vals.name]: {
          ...vals
        },
      });
    }
  };

  const validateFinalForm = (amountOfFormInputs) => {
    return Object.keys(state).length < amountOfFormInputs
      ? false
      : Object.keys(state)
          .map((key) => state[key].isValid)
          .every((el) => el === true);
  };

  const value = {
    state,
    stateChanger,
    validateFinalForm,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
