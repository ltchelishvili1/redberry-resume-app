import { createContext, useEffect, useState } from "react";

export const ExperienceContext = createContext({
  experienceState: [],
  experienceStateChanger: () => {},
  count: 0,
  setCount: () => {},
  validateFinalForm: () => {},
});

export const ExperienceContextProvider = ({ children }) => {
  const [experienceState, setExperienceState] = useState(
    JSON.parse(localStorage.getItem("experienceState")) || []
  );

  const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem("experienceState", JSON.stringify(experienceState));
  }, [experienceState]);

  const experienceStateChanger = (vals, count) => {
    let arr = [...experienceState];
    let temp = [];
    if (experienceState[count]) {
      temp = { ...experienceState[count] };
    }
    if (arr[count]) {
      delete arr[count][""];
    }

    arr[count] = {
      ...arr[count],
      [vals.name]: {
        ...vals,
      },
    };
    setExperienceState(arr);
  };

  const validateFinalForm = (amountOfFormInputs) => {
    return Object.keys(experienceState[count]).length < amountOfFormInputs
      ? false
      : Object.keys(experienceState[count])
          .map((key) => experienceState[count][key].isValid)
          .every((el) => el === true);
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
