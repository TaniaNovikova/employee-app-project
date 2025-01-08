import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";
import { Link } from "react-router-dom";

export const ClientsContaiter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  font-size: 30px;
  padding-top: 25px;
  padding-right: 96px;
  padding-bottom: 25px;
  padding-left: 81px;
  /* border: 5px solid wheat; */
`;
export const StyledLink = styled(Link)`
  color: ${EMPLOYEE_PROJECT_COLORS.DROP_DOWN_TEXT};
  text-decoration: none;
  line-height: 35px;
  font-size: 22px;
  font-family: Lato, Arial, Helvetica, sans-serif;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;
export const StyledParagraph = styled.p`
  display: flex;
  gap: 40px;
`;
