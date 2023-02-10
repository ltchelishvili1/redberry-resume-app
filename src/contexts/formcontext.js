import { createContext, useEffect, useState } from "react";

export const FormContext = createContext({
  state: {},
  stateChanger: () => {},
  validateFinalForm: () => {},
  img: {},
  setImg: () => {},
});

export const FormContextProvider = ({ children }) => {
  const [img, setImg] = useState(
    JSON.parse(localStorage.getItem("image")) || null
  );

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("state")) || {}
  );

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(img));
  }, [img]);

  const stateChanger = async (vals) => {
    if (vals.name === "") return;
    if (vals.name === "image") {
      const reader = new FileReader();
      console.log("img") 
        reader.addEventListener("load", () => {
          setState({
            ...state,
            [vals.name]: {
              ...vals,
              value: reader.result.toString(),
            },
          });
        });
      reader.readAsDataURL(vals.value);
    } else {
      setState({
        ...state,
        [vals.name]: {
          ...vals,
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
    img,
    setImg,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
