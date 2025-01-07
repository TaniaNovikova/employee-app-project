import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { EMPLOYEE_PROJECT_COLORS } from "enums";



export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${EMPLOYEE_PROJECT_COLORS.BLACK};
  font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  height: 100px;
  background-color: ${EMPLOYEE_PROJECT_COLORS.HEADER_WHITE};
  padding: 20px 84px;
  color: ${EMPLOYEE_PROJECT_COLORS.BLACK};
`;

export const Logo = styled.div`
  height: 90px;
  width: 90px;
  border: 4px double ${EMPLOYEE_PROJECT_COLORS.LOGO_TURKIS};
  border-radius: 50%;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 56px;
  height: 100%;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: ${EMPLOYEE_PROJECT_COLORS.BLACK};
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
