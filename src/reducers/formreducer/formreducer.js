import { validate } from "../../utils/validation/validation";

export const FormReducer = (state, action) => {
  switch (action.type) {
    case "Change": {
      return {
        ...state,
        value: action.val,
        name: action.name,
        isValid: validate(action.val, action.validators),
      };
    }
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    case "IsValid": {
      return {
        ...state,
        isValid: action.val,
      };
    }

    case "UNION": {
      return {
        ...state,
        [action.name]: action.val,
      };
    }

    default:
      return state;
  }
};
