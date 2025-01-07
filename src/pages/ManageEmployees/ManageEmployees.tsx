import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import queryString from "query-string";

import { employeesData } from "assets/data";
import { ClientsContaiter, StyledLink, StyledParagraph } from "./styles";
import { EmployeeCardData } from "types";
import Dropdown from "components/Dropdown/Dropdown";
import DropdownLinkItems from "components/DropdownLinkItems/DropdownLinkItems";
const employeeDataKeys = [
  "name",
  "surName",
  "age",
  "jobPosition",
  "id",
  "slug",
  "",
];
function sortEmployees(employeesData: EmployeeCardData[], key: string) {
  const sortedEmployees = [...employeesData];

  if (!key || !employeeDataKeys.includes(key) || key === "") {
    return sortedEmployees;
  }
  sortedEmployees.sort((a, b) => (a > b ? 1 : -1));
  return sortedEmployees;
}
// function sortEmployeesReverse(employeesData: EmployeeCardData[], key: string) {
//   const sortedEmployees = [...employeesData];
//   if (!key || !employeeDataKeys.includes(key) || key === "") {
//     return sortedEmployees;
//   } else if (employeeDataKeys.includes(key)) {
//     sortedEmployees.sort((a, b) => (a < b ? 1 : -1));
//     return sortedEmployees;
//   }
// }

function ManageEmployees() {
  const location = useLocation();
  const query = queryString.parse(location.search);
 

  const [sortKey, setSortKey] = useState(query.sort);

  const onOptionClick = (option: string) => {
    switch (option) {
      case (option = "earlier added"):
        let sortedEmployeesData = [...employeesData].sort((a, b) =>
          a.id > b.id ? 1 : -1
        );
        setSortedEmployees(sortedEmployeesData);
        break;
      case (option = "later added"):
        let sortedEmployeesDataReverse = [...employeesData].sort((a, b) =>
          a.id < b.id ? 1 : -1
        );
        setSortedEmployees(sortedEmployeesDataReverse);
        break;
      case (option = "Surname A-Z"):
        let sortedEmployeesDataBySurname = [...employeesData].sort((a, b) =>
          a.surName > b.surName ? 1 : -1
        );
        setSortedEmployees(sortedEmployeesDataBySurname);
        break;
      case (option = "Surname Z-A"):
        let sortedEmployeesDataBySurnameReverse = [...employeesData].sort(
          (a, b) => (a.surName < b.surName ? 1 : -1)
        );
        setSortedEmployees(sortedEmployeesDataBySurnameReverse);
        break;
      case (option = "Job position Z-A"):
        let sortedEmployeesDataByJobPositionReverse = [...employeesData].sort(
          (a, b) => (a.jobPosition < b.jobPosition ? 1 : -1)
        );
        setSortedEmployees(sortedEmployeesDataByJobPositionReverse);
        break;
      case (option = "Job position A-Z"):
        let sortedEmployeesDataByJobPosition = [...employeesData].sort((a, b) =>
          a.jobPosition > b.jobPosition ? 1 : -1
        );
        setSortedEmployees(sortedEmployeesDataByJobPosition);
        break;
      default:
        setSortedEmployees([...employeesData]);
    }
  };

  const [sortedEmployees, setSortedEmployees] = useState(
    sortEmployees(employeesData, String(sortKey))
  );

  const EmployeesMap = sortedEmployees.map((employeeObj) => {
    return (
      <StyledLink key={employeeObj.id} to={employeeObj.slug}>
       <StyledParagraph><span> {employeeObj.id}</span> <span>{`${employeeObj.surName} ${employeeObj.name}`}</span>  <span> {employeeObj.jobPosition}</span> </StyledParagraph>
      </StyledLink>
    );
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!sortKey || !employeeDataKeys.includes(String(sortKey))) {
      navigate(".");
      setSortKey("");
      setSortedEmployees([...employeesData]);
    }
  }, [sortKey, navigate]);


  return (
    <ClientsContaiter>
      <DropdownLinkItems
        options={EmployeesMap}
        dropdownLinkItemsName={"Employees"}
      />
      <Dropdown
        options={[
          "Surname A-Z",
          "Surname Z-A",
          "earlier added",
          "later added",
          "Job position A-Z",
          "Job position Z-A",
        ]}
        dropdownName={"Sorted by"}
        onOptionClick={onOptionClick}
      />
    </ClientsContaiter>
  );
}

export default ManageEmployees;
