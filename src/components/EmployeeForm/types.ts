
export interface EmployeeFormValue {
  firstName: string;
  lastName: string;
  age: number;
  position: string;
  termsOfUse: boolean;
}

export enum EMPLOYEE_FORM_NAMES {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  AGE = "age",
  POSITION = "position",
  TERMS_OF_USE = "termsOfUse",
}
