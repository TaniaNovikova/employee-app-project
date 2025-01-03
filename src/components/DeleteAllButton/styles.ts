import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";




export const StyledButton = styled.button`
  width: 70px;
  height: 100%;
  outline: none;
  background-color: ${EMPLOYEE_PROJECT_COLORS.RED};
  border-radius: 4px;
  color: ${EMPLOYEE_PROJECT_COLORS.HEADER_WHITE};
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
  padding: 15px;
  align-self: center;
  &:hover {
    background-color: ${EMPLOYEE_PROJECT_COLORS.RED_HOVER};
  }
`;


