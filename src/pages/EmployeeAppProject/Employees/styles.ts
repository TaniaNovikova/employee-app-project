import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

export const EmployeesPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  width: 100%;
  height: fit-content;
  padding-left: 250px;
  padding-top: 40px;
`;

export const EmployeesWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 1300px;
  height:800px;
  padding-bottom: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 30px;
    width:1220px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 4px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const ButtonControl = styled.div`
  width: 40px;
  height: 40px;
`;
export const DeleteCardButtonControl = styled.div`
  width: 100%;
  height: 50px;
`;

export const WrapperForCarouselAndMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
`;
export const Carousel = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const ModalButtonWrapper=styled.div`
width: 210px;
height: 70px;
display: flex;
justify-content:center;
align-items: center;
border-radius: 4px;
border: 14px solid ${EMPLOYEE_PROJECT_COLORS.RED};
background-color: ${EMPLOYEE_PROJECT_COLORS.CARD_WHITE};
`