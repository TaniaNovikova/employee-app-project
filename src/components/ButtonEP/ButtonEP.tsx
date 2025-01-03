import { ButtonProps } from "employeeProjectTypes";
import { StyledButton, ButtonImage } from "./styles";
import { EMPLOYEE_PROJECT_COLORS } from "enums";

function ButtonEP({
  name,
  type = "button",
  onClick,
  imgSrc,
  disabled = false,
  isRed = false,
  backgroundColor = EMPLOYEE_PROJECT_COLORS.BUTTON_BLUE,
  fontColor = EMPLOYEE_PROJECT_COLORS.HEADER_WHITE,
}: ButtonProps) {
  return (
    <StyledButton
      $isRed={isRed}
      type={type}
      onClick={onClick}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $fontColor={fontColor}
    >
      {!!imgSrc && <ButtonImage src={imgSrc} alt="icon" />}
      {!!name && name}
    </StyledButton>
  );
}

export default ButtonEP;
