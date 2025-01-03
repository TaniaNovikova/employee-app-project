import { ReactNode, useContext, useState } from "react";

import { EmployeeAppContext } from "../contexts/EmployeeAppContext";
import { v4 } from "uuid";
import EmployeesCard from "pages/EmployeeAppProject/components/EmployeesСard/EmployeesCard";
import { EmployeeCardData } from "employeeProjectTypes";
import { ButtonControl, Carousel, DeleteCardButtonControl, EmployeesPageWrapper, EmployeesWrapper, WrapperForCarouselAndMap } from "./styles";
import Button from "components/Button/Button";
import DeleteAllButton from "components/DeleteAllButton/DeleteAllButton";

function Employees() {
  const { employees, setEmployees } = useContext(EmployeeAppContext);
  const [index, setIndex] = useState(0);

  const onNextClick = () => {
    setIndex((i) => (i >= employees.length - 1 ? 0 : i + 1));
  };
  const onPrevClick = () => {
    setIndex((i) => (i <= 0 ? employees.length - 1 : i - 1));
  };

  const onDeleteCardByIndex = (index: number, id: number) => {
    if (employees.length === 1) {
      return setEmployees([]);
    } else {
      if (index === employees.length - 1) {
        setIndex(index - 1);

        return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
      } else if (index === 0) {
        setIndex(index + 1);
        return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
      }
      return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
    }
  };
  const employeesCardsMap = (employees: EmployeeCardData[]): ReactNode[] =>
    employees.map((emlpoyeeObj: EmployeeCardData) => {
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
  return (
    <EmployeesPageWrapper>
    <WrapperForCarouselAndMap>
      {!!employees.length && 
        <Carousel>
          <ButtonControl>
            <Button name="<" onClick={onPrevClick} />
          </ButtonControl>
          <div key={v4()}>
            <EmployeesCard
              name={employees[index].name}
              surName={employees[index].surName}
              age={employees[index].age}
              jobPosition={employees[index].jobPosition}
              id={employees[index].id}
              slug={employees[index].slug}
            />
            <DeleteCardButtonControl>
            <Button
              name="Delete card"
              onClick={() => {
                onDeleteCardByIndex(
                  employees.indexOf(employees[index]),
                  employees[index].id
                );
              }}
            />
            </DeleteCardButtonControl>
          </div>
          <ButtonControl>
            <Button name=">" onClick={onNextClick} />
          </ButtonControl>
        </Carousel>
      }
      <EmployeesWrapper>{employeesCardsMap(employees)}</EmployeesWrapper>
      </WrapperForCarouselAndMap>
      {!!employees.length && ( //!! для того, чтобы ноль не прорисовывался на странице
        <DeleteAllButton
          name="Delete all cards"
          onClick={() => setEmployees([])}
        />
      )}
    </EmployeesPageWrapper>
  );
}

export default Employees;
