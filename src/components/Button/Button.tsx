import { ButtonProps } from "./types";
import { SyledButton, ButtonImage } from "./styles";
import { colors } from "styles/colors";

function Button({
  name,
  type = "button",
  onClick,
  imgSrc,
  disabled = false,
  isRed = false,
  backgroundColor = colors.PRIMARY_BLUE,
  fontColor = colors.IVORY,
}: ButtonProps) {
  return (
    <SyledButton
      $isRed={isRed}
      type={type}
      onClick={onClick}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $fontColor={fontColor}
    >
      {!!imgSrc && <ButtonImage src={imgSrc} alt="icon" />}
      {!!name && name}
    </SyledButton>
  );
}

export default Button;
