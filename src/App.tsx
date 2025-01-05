
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";

import CreateEmployee from "pages/CreateEmployee/CreateEmployee";
import Employees from "pages/Employees/Employees";
import Layout from "pages/Layout/Layout";
import { PAGES_PATHS } from "enums";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path={PAGES_PATHS.HOME}></Route>
          <Route
            path={PAGES_PATHS.CREATE_EMPLOYEES}
            element={<CreateEmployee />}
          />
          <Route path={PAGES_PATHS.EMPLOYEES} element={<Employees />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>

      
    </BrowserRouter>
  );
}

export default App;
