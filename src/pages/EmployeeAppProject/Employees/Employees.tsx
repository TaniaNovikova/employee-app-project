import { ReactNode, useContext } from "react";


import { EmployeeAppContext } from "../contexts/EmployeeAppContext";
import { v4 } from "uuid";
import EmployeesCard from "pages/EmployeeAppProject/components/EmployeesСard/EmployeesCard";
import { EmployeeCardData } from "employeeProjectTypes";
import { EmployeesWrapper } from "./styles";

function Employees() {
  const { employees } = useContext(EmployeeAppContext);

  const getEmployeesCards = (employees: EmployeeCardData[]): ReactNode[] =>
    employees.map((emlpoyeeObj: EmployeeCardData) => {
      return (
        <EmployeesCard
          key={v4()}
          name={emlpoyeeObj.name}
          surName={emlpoyeeObj.surName}
          age={emlpoyeeObj.age}
          // {age? && age={emlpoyeeObj.age}}
          jobPosition={emlpoyeeObj.jobPosition}
          id={emlpoyeeObj.id}
          slug={emlpoyeeObj.slug}
        />
      );
    });

  return <EmployeesWrapper>{getEmployeesCards(employees)}</EmployeesWrapper>;
}

export default Employees;
