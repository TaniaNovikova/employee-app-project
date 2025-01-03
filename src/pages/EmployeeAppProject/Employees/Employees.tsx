import { ReactNode, useContext, useState } from "react";

import { EmployeeAppContext } from "../contexts/EmployeeAppContext";
import { v4 } from "uuid";
import EmployeesCard from "pages/EmployeeAppProject/components/EmployeesСard/EmployeesCard";
import { EmployeeCardData } from "employeeProjectTypes";
import {
  ButtonControl,
  Carousel,
  DeleteCardButtonControl,
  EmployeesPageWrapper,
  EmployeesWrapper,
  ModalButtonWrapper,
  WrapperForCarouselAndMap,
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
            <DeleteCardButtonControl>
              <ButtonEP
                name="Delete card"
                isRed
                onClick={() => {
                  onDeleteCard(emlpoyeeObj.id);
                }}
              />
            </DeleteCardButtonControl>
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
        {!!employees.length && (
          <Carousel>
            <ButtonControl>
              <ButtonEP name="<" onClick={onPrevClick} />
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
                <ButtonEP
                  name="Delete card"
                  isRed
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
              <ButtonEP name=">" onClick={onNextClick} />
            </ButtonControl>
          </Carousel>
        )}
        <EmployeesWrapper>{employeesCardsMap(employees)}</EmployeesWrapper>
      </WrapperForCarouselAndMap>

      <div>
        {!!employees.length && (
          <ModalButtonWrapper>
            <Button variant="outlined" color="error" onClick={handleOpen}>
              Delete all cards
            </Button>
          </ModalButtonWrapper>
        )}

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="delete-dialog-title"
          aria-describedby="delete-dialog-description"
        >
          <DialogTitle id="delete-dialog-title">Delete All Cards?</DialogTitle>
          <DialogContent>
            <DialogContentText id="delete-dialog-description">
              Are you sure you want to delete all cards? This action cannot be
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
      </div>
    </EmployeesPageWrapper>
  );
}

export default Employees;
