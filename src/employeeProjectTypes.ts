import { HTMLInputTypeAttribute, ReactNode, SetStateAction } from "react";
import { ChangeEvent } from "react";

export interface LayoutProps {
  children: ReactNode;
}

// export interface EmployeeContextType {
//   employees: Employee[];
//   setEmployees: React.Dispatch<SetStateAction<Employee[]>>;
// }

export interface EmployeeProjectContextType {
  employeesCardData: EmployeeCardData[];
  setEmployeesCardData: React.Dispatch<SetStateAction<Employee[]>>;

};


export interface Employee {
  name: string;
  surName: string;
  age?: number |undefined;
  jobPosition: string;
}

export interface EmployeeFormValue extends Employee {
  termsOfUse: boolean;
}
export interface EmployeeCardData{
  name: string;
  surName: string;
  age?: number |string;
  jobPosition: string;
  id: number;
  slug: string;
}

////////////////////////////////////////////////////////////////////////////////////////////////
export type ButtonType = "button" | "submit" | "reset";
export interface ButtonProps {
  name: string | undefined;
  type?: ButtonType;
  imgSrc?: string | undefined;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  isRed?: boolean;
  backgroundColor?: string;
  fontColor?: string;
}

export interface CheckboxProps {
  name: string;
  id?: string;
  type: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  error?: string;
}

export interface InputProps {
  name: string;
  id?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | undefined;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
}
import { MouseEvent } from "react";



