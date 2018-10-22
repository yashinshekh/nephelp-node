import {isEmpty} from "./isEmpty";
import Validation from 'validator';

export const validateRegister = (data) => {
    const errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if(!Validation.isEmail(data.email)){
        errors.email = 'Enter a valid email';
    }
    if(Validation.isEmpty(data.email)){
        errors.email = 'Please enter a Email';
    }
    if(Validation.isEmpty(data.password)){
        errors.password = 'Please enter a password';
    }
    if(!Validation.isLength(data.password,{min:2,max:10})){
        errors.password = 'Password needs to be 2 to 10 character';
    }
    if(Validation.isEmpty(data.password2)){
        errors.password2 = 'Please confirm your password';
    }
    if(!Validation.equals(data.password,data.password2)){
        errors.password2 = 'Password do not match'
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
};
