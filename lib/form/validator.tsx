import {FormValue} from './form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

type FormRules = Array<FormRule>

export interface FormErrors {
  [K: string]: string[]
}

interface IValidator {
  (formValue: FormValue, rules: FormRules): FormErrors;
  noError: (errors: FormErrors) => boolean
}

const isEmpty = (value: any) => {
  return value === null || value === undefined || value === '';
};

const Validator: IValidator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: FormErrors = {};
  const addError = (key: string, msg: string) => {
    if (!errors[key]) {
      errors[key] = [msg];
    } else {
      errors[key].push(msg);
    }
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, '必填');
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, '太长');
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, '太短');
    }
    if (rule.pattern && !(rule.pattern.test(value))) {
      addError(rule.key, '格式错误');
    }
  });
  return errors;
};

Validator.noError = (errors: FormErrors) => Object.keys(errors).length === 0;

export default Validator;