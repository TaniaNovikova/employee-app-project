
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";

import CreateEmployee from "pages/CreateEmployee/CreateEmployee";
import Employees from "pages/Employees/Employees";
import Layout from "pages/Layout/Layout";
import { PAGES_PATHS } from "enums";
import ManageEmployees from "pages/ManageEmployees/ManageEmployees";
import EmployeesInfo from "pages/EmployeesInfo/EmployeesInfo";
import Home from "pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path={PAGES_PATHS.HOME} element={<Home />}/>
          <Route
            path={PAGES_PATHS.CREATE_EMPLOYEES}
            element={<CreateEmployee />}
          />
          <Route path={PAGES_PATHS.EMPLOYEES} element={<Employees />} />
          <Route path={PAGES_PATHS.MANAGE_EMPLOYEES} element={<ManageEmployees />} />
          <Route path="/manage/:slug"  element={<EmployeesInfo />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>

      
    </BrowserRouter>
  );
}

export default App;
