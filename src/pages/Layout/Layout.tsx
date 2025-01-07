import { useNavigate } from "react-router-dom";

import EmployeeAppContextProvider from "pages/contexts/EmployeeAppContext";
import logoTN from "assets/hr-department.png"

import {
  LayoutWrapper,
  Header,
  Main,
  Link,
  Logo,
  LogoImg,
  NavigationContainer,
} from "./styles";
import { LayoutProps } from "types";
import { PAGES_PATHS } from "enums";


function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(PAGES_PATHS.HOME);
  };

  return (
    <EmployeeAppContextProvider>
      <LayoutWrapper>
        <Header>
          <Logo onClick={goToHomePage}>
            <LogoImg
              src={logoTN}
              alt="logo picture"
            />
          </Logo>
          <NavigationContainer>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PAGES_PATHS.CREATE_EMPLOYEES}
            >
              Create Employee
            </Link>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PAGES_PATHS.EMPLOYEES}
            >
              Employees
            </Link>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PAGES_PATHS.MANAGE_EMPLOYEES}
            >
              Manage Employees
            </Link>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutWrapper>
    </EmployeeAppContextProvider>
  );
}

export default Layout;
