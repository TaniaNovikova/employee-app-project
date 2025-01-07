import styled from "@emotion/styled";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

interface StyledButtonProps {
  $backgroundColor: string;
  $isRed: boolean;
  $fontColor: string;
}

const getButtonColor = (
  $isRed: boolean | undefined,
  $backgroundColor: string
) => {
  return $isRed ? EMPLOYEE_PROJECT_COLORS.RED : $backgroundColor;
};

export const StyledButton = styled("button")<StyledButtonProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  color: ${({ $fontColor }) => $fontColor};
  background-color: ${({ $isRed, $backgroundColor }) =>
    getButtonColor($isRed, $backgroundColor)};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: ${EMPLOYEE_PROJECT_COLORS.LABELS_GRAY};
  }
`;

export const ButtonImage = styled("img")`
  height: 50px;
`;
