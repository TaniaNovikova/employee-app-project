import {
  useState,
  createContext,
  PropsWithChildren,
  SetStateAction,
} from "react";

import { LayoutProps } from "pages/Layout/types";
import { EmployeeCardData } from "types"

export interface EmployeeContextType {
  employees: EmployeeCardData[];
  setEmployees: React.Dispatch<SetStateAction<EmployeeCardData[]>>;
}



export const EmployeeAppContext = createContext<EmployeeContextType>({
  employees: [],
  setEmployees: () => {},
});


function EmployeeAppContextProvider({
  children,
}: PropsWithChildren<LayoutProps>) {
  const [employee, setEmployee] = useState<EmployeeCardData[]>([]);

  
  return (
    <EmployeeAppContext.Provider
      value={{ employees: employee, setEmployees: setEmployee }}
    >
      {children}
    </EmployeeAppContext.Provider>
  );
}

export default EmployeeAppContextProvider;
