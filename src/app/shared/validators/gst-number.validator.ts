import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

// custom validator to check GST number
export function GSTNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    let regTest = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value);

    return !regTest && value ? { invalid: true } : null;
  };
}

export function MobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    let regTest = /^((\\+91-?)|0)?[0-9]{10}$/.test(value);
    

    return !regTest && value ? { invalid: true } : null;
  };
}

export function PinCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    let regTest = /^[1-9]{1}[0-9]{5}$/.test(value);
    

    return !regTest && value && value.length != 6 ? { invalid: true } : null;
  };
}
