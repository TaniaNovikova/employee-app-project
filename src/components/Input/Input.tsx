import { InputProps } from "./types";
import {
  InputWrapper,
  InputLabel,
  InputElemnt,
  ErrorContainer,
} from "./styles";

function Input({
  label,
  name,
  type,
  placeholder,
  id,
  disabled,
  error,
  value = undefined,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputElemnt
        $error={error}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {!!error && <ErrorContainer>{error}</ErrorContainer>}
    </InputWrapper>
  );
}

export default Input;
