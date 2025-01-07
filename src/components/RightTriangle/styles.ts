import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const StyledDiv = styled.div`
  position: absolute;
  right: -26px;
  transform: rotate(45deg);
  width: 44px;
  height: 44px;
  border-right: 4px double ${EMPLOYEE_PROJECT_COLORS.LOGO_HELL};
  border-top: 4px double ${EMPLOYEE_PROJECT_COLORS.LOGO_HELL};
  background-color: ${EMPLOYEE_PROJECT_COLORS.LOGO_TURKIS};
`;
