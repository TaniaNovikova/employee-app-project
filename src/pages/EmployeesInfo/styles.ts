import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const EmployeeInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmployeesCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 635px;
  min-height: 441px;
  max-height: fit-content;
  padding: 60px;
  gap: 30px;
  background-color: ${EMPLOYEE_PROJECT_COLORS.CARD_WHITE};
  border-radius: 4px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 65px;
  gap: 12px;
`;

export const TextLabel = styled.p`
  font-size: 16px;
  font-weight: lighter;
  font-family: Lato, Arial, Helvetica, sans-serif;
  color: ${EMPLOYEE_PROJECT_COLORS.LABELS_GRAY};
`;

export const TextContent = styled.p`
  font-size: 28px;
  font-weight: 700;
  font-family: Lato, Arial, Helvetica, sans-serif;
  color: ${EMPLOYEE_PROJECT_COLORS.PLACEHOLDER_GRAY};
`;
export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: transparent;
`;

export const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
