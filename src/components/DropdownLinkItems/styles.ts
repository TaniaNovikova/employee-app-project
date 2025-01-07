import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* border: 2px solid red; */
  width: 500px;
  height: fit-content;
  padding: 0px;
  gap: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  background-color: ${EMPLOYEE_PROJECT_COLORS.LOGO_TURKIS};
  width: 300px;
  height: 70px;
  border-radius: 4px;
  border: transparent;
  outline: none;
  padding: 2px;
  padding-left: 20px;
  color: ${EMPLOYEE_PROJECT_COLORS.LOGO_HELL};
  font-size: 22px;
  font-family: Lato, Arial, Helvetica, sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  margin: 0px;
  
`;

export const UlWrapper = styled.div`
  position: relative;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  border-radius: 4px;
  margin: 0px;
  background-color: #fff;
  border: 1px solid rgb(209, 213, 219);
`;

export const StyledUl = styled.ul`
 display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  gap: 0px;
  margin: 0px;
  padding: 0px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    background: ${EMPLOYEE_PROJECT_COLORS.DROP_DOWN_HOVER_TEXT};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      ${EMPLOYEE_PROJECT_COLORS.LOGO_HELL},
      ${EMPLOYEE_PROJECT_COLORS.LOGO_TURKIS}
    );
    border-radius: 4px;
    cursor: pointer;
  }
  /* &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  } */
`;

export const StyledLiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  cursor: pointer;
  border: 4px;
  &:hover {
    background-color: #0388ff;
    color: #fff;
  }
`;

export const StyledLi = styled.li`
 display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-right: 20px;
  padding-left: 20px;
  color: ${EMPLOYEE_PROJECT_COLORS.DROP_DOWN_TEXT};
  font-size: 22px;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  text-decoration: none;
  line-height: 30px;
  border-radius: 4px;
  &:hover {
    color: #fff;
  }
`;

