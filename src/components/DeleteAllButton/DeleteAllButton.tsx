import { ButtonProps } from "employeeProjectTypes";
import { StyledButton } from "./styles";

function DeleteAllButton({ name, type = "button", onClick }: ButtonProps) {
  return <StyledButton onClick={onClick} >{name}</StyledButton>;
}

export default DeleteAllButton;
