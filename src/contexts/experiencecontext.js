import { createContext, useEffect, useState } from "react";

const InitialState = JSON.parse(localStorage.getItem("experienceState")) || [];

export const ExperienceContext = createContext({
  experienceState: [],
  experienceStateChanger: () => {},
  count: 0,
  setCount: () => {},
  validateFinalForm: () => {},
});

export const ExperienceContextProvider = ({ children }) => {
  const [experienceState, setExperienceState] = useState(InitialState);
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("experienceState", JSON.stringify(experienceState));
  }, [experienceState]);

  //combines input values into same object
  const experienceStateChanger = (vals, count) => {
    if (vals.name === "") return;
    setExperienceState((prevExperienceState) => {
      const arr = [...prevExperienceState];
      arr[count] = {
        ...arr[count],
        [vals.name]: {
          ...vals,
        },
      };
      return arr;
    });
  };

  const validateFinalForm = (amountOfFormInputs) => {
    if (
      !experienceState[count] ||
      Object.keys(experienceState[count]).length < amountOfFormInputs
    ) {
      return false;
    }
    for (const key in experienceState[count]) {
      if (!experienceState[count][key].isValid) {
        return false;
      }
    }
    return true;
  };
  const value = {
    experienceState,
    experienceStateChanger,
    count,
    setCount,
    validateFinalForm,
  };
  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
};
