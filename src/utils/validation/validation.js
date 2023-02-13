const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_GEORGIAN = "GEORGIAN";
const VALIDATOR_TYPE_VALID = "VALID";
const VALIDATOR_TYPE_PHONENUMBER = "PHONENUMBER";
const VALIDATOR_TYPE_NOT_SYMBOLS = "SYMBOLS"

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });

export const VALIDATOR_GEORGIAN = () => ({ type: VALIDATOR_TYPE_GEORGIAN });

export const VALIDATOR_MINLENGTH = () => ({
  type: VALIDATOR_TYPE_MINLENGTH,
});

export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

export const VALIDATOR_VALID = () => ({ type: VALIDATOR_TYPE_VALID });

export const VALIDATOR_NOT_SYMBOLS = () => ({type: VALIDATOR_TYPE_NOT_SYMBOLS})

export const VALIDATOR_PHONENUMBER = () => ({
  type: VALIDATOR_TYPE_PHONENUMBER,
});

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= 2;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /@redberry\.ge$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_GEORGIAN) {
      isValid = isValid && /^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_VALID) {
      isValid = isValid || true;
    }
    if (validator.type === VALIDATOR_TYPE_PHONENUMBER) {
      /*
    if we consider that georgian phone number format could be also accepted by only 9 digits starting with 5 than this is the code we should use
      let tempValid =
        isValid &&
        /^\+995[5]/.test(value.replaceAll(" ", "")) &&
        value.replaceAll(" ", "").length === 13;
      let tempValid1 =
        isValid &&
        /^5/.test(value.replaceAll(" ", "")) &&
        value.replaceAll(" ", "").length === 9;
        isValid = tempValid1 || tempValid;

    */
      isValid = isValid && /^\+995 5\d{2} \d{3} \d{3}$/.test(value);
    }
    if(validator.type === VALIDATOR_TYPE_NOT_SYMBOLS){
      //when i send request with special symbols such as ;,' ... it returns 422 so i added this validation
      isValid = isValid && /^[a-zA-Z0-9აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/.test(value)
    }
  }
  return isValid;
};
