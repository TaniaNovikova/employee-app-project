import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

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
  color: ${EMPLOYEE_PROJECT_COLORS.LABELS_GRAY};
`;

export const TextContent = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: ${EMPLOYEE_PROJECT_COLORS.PLACEHOLDER_GRAY};
`;
