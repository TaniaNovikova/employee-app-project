import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CheckboxLabel = styled.label`
  font-size: 16px;
  font-family: Lato, Arial, Helvetica, sans-serif;
  color: ${EMPLOYEE_PROJECT_COLORS.LABELS_GRAY};
`;
export const CheckboxElement = styled.input`
  width: 25px;
  height: 25px;
  color: ${EMPLOYEE_PROJECT_COLORS.BLACK};
`;
