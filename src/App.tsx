import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";

import CreateEmployee from "pages/EmployeeAppProject/CreateEmployee/CreateEmployee";
import Employees from "pages/EmployeeAppProject/Employees/Employees";
import { PagesPaths } from "pages/EmployeeAppProject/Layout/types";
import Layout from "pages/EmployeeAppProject/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path={PagesPaths.HOME}></Route>
          <Route
            path={PagesPaths.CREATE_EMPLOYEES}
            element={<CreateEmployee />}
          />
          <Route path={PagesPaths.EMPLOYEES} element={<Employees />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>

      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Lesson08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Lesson13 /> */}
      {/* <Homework06 /> */}
      {/* <Homework07 /> */}
      {/* <Homework08 /> */}
      {/* <Homework09 /> */}
      {/* <Homework11 /> */}
      {/* <Homework13 /> */}
      {/* <Consultation03 /> */}
    </BrowserRouter>
  );
}

export default App;
