import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  padding: 60px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  background-color: ${EMPLOYEE_PROJECT_COLORS.CARD_WHITE};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const ButtonEPWrapper = styled.div`
  height: 70px;
  width: 100%;
`;

export const ModalButton = styled.button`
  background-color: ${EMPLOYEE_PROJECT_COLORS.MODAL_BUTTON_BG};
  color: ${EMPLOYEE_PROJECT_COLORS.MODAL_BUTTON_TEXT};
  height: 50px;
  width: 100%;
  font-size: 22px;
  border: 1px solid transparent;
  cursor: pointer;
`;
