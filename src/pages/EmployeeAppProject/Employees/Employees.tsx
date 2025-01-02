import { ReactNode, useContext, useState } from "react";

import { EmployeeAppContext } from "../contexts/EmployeeAppContext";
import { v4 } from "uuid";
import EmployeesCard from "pages/EmployeeAppProject/components/EmployeesСard/EmployeesCard";
import { EmployeeCardData } from "employeeProjectTypes";
import { ButtonControl, EmployeesWrapper } from "./styles";
import Button from "components/Button/Button";
import DeleteAllButton from "components/DeleteAllButton/DeleteAllButton";

function Employees() {
  const { employees, setEmployees } = useContext(EmployeeAppContext);
  // const [newEmployees, setNewEmployees] = useState(employees);


  // const onAllCardsDelete = () => {
  //   setNewEmployees([]);
  // };
  // let lastIndex = newEmployees.length - 1;
  // const [index, setIndex] = useState(lastIndex);

  // const onPrevClick = () => {
  //   setIndex((i) => (i <= 0 ? lastIndex : i - 1));
  // };

  // const onNextClick = () => {
  //   setIndex((i) => (i >= lastIndex ? 0 : i + 1));
  // };
  const employeesCardsMap = (newEmployees: EmployeeCardData[]): ReactNode[] =>
    newEmployees.map((emlpoyeeObj: EmployeeCardData) => {
      return (
        <>
          <div key={v4()}>
            <EmployeesCard
              name={emlpoyeeObj.name}
              surName={emlpoyeeObj.surName}
              age={emlpoyeeObj.age}
              jobPosition={emlpoyeeObj.jobPosition}
              id={emlpoyeeObj.id}
              slug={emlpoyeeObj.slug}
            />
            <Button
              name="Delete card"
              onClick={() => {
                onDeleteCard(emlpoyeeObj.id);
              }}
            />
          </div>
        </>
      );
    });
  
  const onDeleteCard = (id: number) => {
    return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
  };
  // const onDeleteCard = (id: number) => {
  //   return setNewEmployees(newEmployees.filter((cardObj) => cardObj.id !== id));
  // };

  // const onDeleteCardByIndex = (index: number) => {
  //   if (index === lastIndex) {
  //     const filteredEmployees = newEmployees.filter(
  //       (newEmployeesObj) => newEmployees.indexOf(newEmployeesObj) !== index
  //     );
  //     return setNewEmployees(filteredEmployees);
  //   } else {
  //     return setNewEmployees(
  //       newEmployees.filter(
  //         (newEmployeesObj) => newEmployees.indexOf(newEmployeesObj) !== index
  //       )
  //     );
  //   }
  // };
  return (
    <>
      {/* <ButtonControl>
        <Button name="<" onClick={onPrevClick} />
      </ButtonControl>
      <div key={v4()}>
        <EmployeesCard
          name={newEmployees[index].name}
          surName={newEmployees[index].surName}
          age={newEmployees[index].age}
          jobPosition={newEmployees[index].jobPosition}
          id={newEmployees[index].id}
          slug={newEmployees[index].slug}
        />
        <Button
          name="Delete card"
          onClick={() => {
            onDeleteCardByIndex(newEmployees.indexOf(newEmployees[index]));
          }}
        />
      </div>
      <ButtonControl>
        <Button name=">" onClick={onNextClick} />
      </ButtonControl> */}
      <EmployeesWrapper>{employeesCardsMap(employees)}</EmployeesWrapper>
      {!!employees.length && ( //!! для того, чтобы ноль не прорисовывался на странице
        <DeleteAllButton
          name="Delete all cards"
          onClick={() => setEmployees([])}
        />
      )}
    </>
  );
}

export default Employees;
