import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${EMPLOYEE_PROJECT_COLORS.LABELS_GRAY};
`;

export const InputElement = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid ${EMPLOYEE_PROJECT_COLORS.INPUT_BORDERS_GRAY};
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: ${EMPLOYEE_PROJECT_COLORS.PLACEHOLDER_GRAY};
    opacity: ${EMPLOYEE_PROJECT_COLORS.PLACEHOLDER_OPACITY};
  }
`;

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 16px;
`;
