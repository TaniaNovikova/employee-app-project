import "./styles.ts";
import { ErrorMessage, InputContainer, InputElement, Label } from './styles';
import { InputProps } from "types.js";

function Input({ name, id, type = 'text', placeholder, label, value, onChange, error, min, max, step }: InputProps) {
  // console.log("Input render or re-render");

  return (
    <InputContainer>
      {/* Пример оператора условного рендеринга */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-element"
        min={min}
        max={max}
        step={step}
      />
      <ErrorMessage>{error}</ErrorMessage>
      {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </InputContainer>
  );
}

export default Input;