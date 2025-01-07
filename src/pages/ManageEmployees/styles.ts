import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";
import { Link } from "react-router-dom";

export const ClientsContaiter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  height: 450px;
  font-size: 30px;
  padding: 40px;
  /* border: 5px solid wheat; */
`;
export const StyledLink = styled(Link)`
  color: ${EMPLOYEE_PROJECT_COLORS.DROP_DOWN_TEXT};
  text-decoration: none;
  line-height: 35px;
  font-size: 22px;
  font-family: Lato, Arial, Helvetica, sans-serif;
  text-decoration: none;
  line-height: 30px;
  &:hover {
    color: #fff;
  }
`;
export const StyledParagraph=styled.p`
display: flex;
gap: 40px;
`