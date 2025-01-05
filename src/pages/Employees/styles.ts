import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog/Dialog";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const EmployeesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

export const EmployeesWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 1278px;
  height: 570px;
  padding-bottom: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 20px;
    width: 1278px;
  }
  &::-webkit-scrollbar-track {
    background: ${EMPLOYEE_PROJECT_COLORS.BLACK};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      ${EMPLOYEE_PROJECT_COLORS.CARD_WHITE},
      ${EMPLOYEE_PROJECT_COLORS.BUTTON_BLUE}
    );
    border-radius: 4px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const ButtonControl = styled.div`
  width: 40px;
`;
export const DeleteCardButtonControl = styled.div`
  width: 515px;
`;
export const DeleteAllButtonControl = styled.div`
  width: 700px;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CardWithButtonWrapper = styled.div`
  width: 635px;
  height: 570px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  border-radius: 4px;
  background-color: ${EMPLOYEE_PROJECT_COLORS.CARD_WHITE};
`;
export const StyledModalWrapper = styled(Dialog)`
  & .MuiPaper-root {
    display: flex;
    gap: 15px;
    width: fit-content;
    height: fit-content;
    padding: 60px;
  }
  & #delete-dialog-title {
    font-size: 28px;
    display: flex;
    justify-content: center;
    font-family: Lato, Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: ${EMPLOYEE_PROJECT_COLORS.BLACK};

  }
  & #delete-dialog-description {
    font-size: 26px;
    font-family: Lato, Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: ${EMPLOYEE_PROJECT_COLORS.BLACK};

  }
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonDialogControl = styled.div`
  width: 200px;
`;
export const DialogContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  padding-top: 0px;
`;



