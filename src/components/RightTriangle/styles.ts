import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const StyledDiv = styled.div`
  position: absolute;
  right: -25px;
  transform: rotate(45deg);
  width: 42px;
  height: 42px;
  border-right: 4px double ${EMPLOYEE_PROJECT_COLORS.LOGO_HELL};
  border-top: 4px double ${EMPLOYEE_PROJECT_COLORS.LOGO_HELL};
  background-color: ${EMPLOYEE_PROJECT_COLORS.LOGO_TURKIS};
`;
