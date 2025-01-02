import { useNavigate } from "react-router-dom";

import EmployeeAppContextProvider from "pages/EmployeeAppProject/contexts/EmployeeAppContext";
import logoTN from "assets/LogoTN.png"

import {
  LayoutWrapper,
  Header,
  Main,
  Link,
  Logo,
  LogoImg,
  NavigationContainer,
} from "./styles";
import { LayoutProps, PagesPaths } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(PagesPaths.HOME);
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
              to={PagesPaths.CREATE_EMPLOYEES}
            >
              Create Employee
            </Link>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.EMPLOYEES}
            >
              Employees
            </Link>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutWrapper>
    </EmployeeAppContextProvider>
  );
}

export default Layout;
