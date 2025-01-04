import { ReactNode, useContext, useState } from "react";

import { EmployeeAppContext } from "../contexts/EmployeeAppContext";
import { v4 } from "uuid";
import EmployeesCard from "components/EmployeesСard/EmployeesCard";
import { EmployeeCardData } from "types";
import {
  ButtonControl,
  CardWithButtonWrapper,
  Carousel,
  DeleteAllButtonControl,
  DeleteCardButtonControl,
  EmployeesPageWrapper,
  EmployeesWrapper,
 
} from "./styles";
import ButtonEP from "components/ButtonEP/ButtonEP";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function Employees() {
  const { employees, setEmployees } = useContext(EmployeeAppContext);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    setEmployees([]);
    setOpen(false);
  };

  const onNextClick = () => {
    setIndex((i) => (i >= employees.length - 1 ? 0 : i + 1));
  };
  const onPrevClick = () => {
    setIndex((i) => (i <= 0 ? employees.length - 1 : i - 1));
  };

  const onDeleteCardByIndex = (index: number, id: number) => {
    if (employees.length === 1) {
      return setEmployees([]);
    } else if (employees.length === 2) {
      setIndex(0);
      return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
    } else {
      if (index === employees.length - 1) {
        setIndex(index - 1);
        return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
      } else if (index === 0) {
        setIndex(1);
        return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
      }
      return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
    }
  };
  const employeesCardsMap = (employees: EmployeeCardData[]): ReactNode[] =>
    employees.map((emlpoyeeObj: EmployeeCardData) => {
      return (
        <>
          <CardWithButtonWrapper key={v4()}>
            <EmployeesCard
              name={emlpoyeeObj.name}
              surName={emlpoyeeObj.surName}
              age={emlpoyeeObj.age}
              jobPosition={emlpoyeeObj.jobPosition}
              id={emlpoyeeObj.id}
              slug={emlpoyeeObj.slug}
            />
            <DeleteCardButtonControl>
              <ButtonEP
                name="Delete"
                isRed
                onClick={() => {
                  onDeleteCard(emlpoyeeObj.id);
                }}
              />
            </DeleteCardButtonControl>
          </CardWithButtonWrapper>
        </>
      );
    });

  const onDeleteCard = (id: number) => {
    return setEmployees(employees.filter((cardObj) => cardObj.id !== id));
  };

  return (
    <EmployeesPageWrapper>
        {!!employees.length && (
          <Carousel>
            <ButtonControl>
              <ButtonEP name="<" onClick={onPrevClick} />
            </ButtonControl>

            <CardWithButtonWrapper key={v4()}>
              <EmployeesCard
                name={employees[index].name}
                surName={employees[index].surName}
                age={employees[index].age}
                jobPosition={employees[index].jobPosition}
                id={employees[index].id}
                slug={employees[index].slug}
              />
              <DeleteCardButtonControl>
                <ButtonEP
                  name="Delete"
                  isRed
                  onClick={() => {
                    onDeleteCardByIndex(
                      employees.indexOf(employees[index]),
                      employees[index].id
                    );
                  }}
                />
              </DeleteCardButtonControl>
            </CardWithButtonWrapper>

            <ButtonControl>
              <ButtonEP name=">" onClick={onNextClick} />
            </ButtonControl>
          </Carousel>
        )}
        {!!employees.length && (
          <DeleteAllButtonControl>
            <ButtonEP name="Remove All Employees" isRed onClick={handleOpen} />
          </DeleteAllButtonControl>
        )}

        <EmployeesWrapper>{employeesCardsMap(employees)}</EmployeesWrapper>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Delete All Employees?</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to remove all employees? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* </div> */}
    </EmployeesPageWrapper>
  );
}

export default Employees;
