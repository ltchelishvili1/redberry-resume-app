import { createContext, useEffect, useState } from "react";

const InitialState = JSON.parse(localStorage.getItem("state")) || {};

export const FormContext = createContext({
  state: {},
  stateChanger: () => {},
  validateFinalForm: () => {},
  img: {},
  setImg: () => {},
});

export const FormContextProvider = ({ children }) => {
  const [state, setState] = useState(InitialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const stateChanger = async (vals) => {
    if (vals.name === "") return;

    if (vals.name === "image") {
      const reader = new FileReader();
      reader.readAsDataURL(vals.value);
      reader.addEventListener("load", () => {
        setState((prevState) => ({
          ...prevState,
          [vals.name]: {
            ...vals,
            value: reader.result.toString(),
          },
        }));
      });
    } else {
      setState((prevState) => ({
        ...prevState,
        [vals.name]: {
          ...vals,
        },
      }));
    }
  };

  const validateFinalForm = (amountOfFormInputs) => {
    if (Object.keys(state).length < amountOfFormInputs) {
      return false;
    }
    for (const key in state) {
      if (!state[key].isValid) {
        return false;
      }
    }
    return true;
  };

  const value = {
    state,
    stateChanger,
    validateFinalForm,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
