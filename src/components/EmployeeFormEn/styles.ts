// @import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
import styled from "@emotion/styled";

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  padding: 60px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  background-color: #fff;
`;

export const EmployeeFormTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
