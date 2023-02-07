import { createContext, useEffect, useState } from "react";

export const ExperienceContext = createContext({
  experienceState: {},
  experienceStateChanger: () => {},
});

export const ExperienceContextProvider = ({ children }) => {
  const [experienceState, setExperienceState] = useState([]);

  const validateFinalForm = (amountOfFormInputs) => {
    return Object.keys(experienceState).length < amountOfFormInputs
      ? false
      : Object.keys(experienceState)
          .map((key) => experienceState[key].isValid)
          .every((el) => el === true);
  };
  let temp = [];
  const experienceStateChanger = (vals, count) => {
    if (vals.value === "") return;
    temp[count] = {
      ...temp[count],
      [vals.name]: {
        ...vals,
      },
      
    };
    if (!experienceState) return;
    setExperienceState(temp);
  };

  const value = {
    experienceState,
    experienceStateChanger,
  };
  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
};
