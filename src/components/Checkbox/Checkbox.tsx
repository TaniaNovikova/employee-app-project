import { CheckboxContainer, CheckboxElement, CheckboxLabel} from "./styles";
import { CheckboxProps } from "employeeProjectTypes";

function Checkbox({
  id,
  name,
  onChange,
  checked = false,
  label,
 type = "checkbox",
}: CheckboxProps) {
  return (
    <CheckboxContainer>
      <CheckboxElement
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
}

export default Checkbox;
