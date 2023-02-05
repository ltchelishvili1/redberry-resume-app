import { createContext, useState } from "react";

export const FormContext = createContext({
  state: {},
  stateChanger: () => {},
});

export const FormContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  let isValid = true;
  const stateChanger = (vals) => {
    isValid = vals.isValid;
    setState({ ...state, [vals.name]: vals.value });
  };

  const value = {
    state,
    stateChanger,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
