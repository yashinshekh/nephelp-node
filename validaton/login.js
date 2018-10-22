import Validation from 'validator';
import {isEmpty} from "./isEmpty";

export const validateLogin = data => {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(!Validation.isEmail(data.email)){
      errors.email = 'Enter a valid email';
  }
  if(Validation.isEmpty(data.password)){
      errors.password = "Enter a password."
  }

  return {
      errors,
      isValid:isEmpty(errors)
  }

};