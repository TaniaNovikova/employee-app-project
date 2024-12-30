import { HTMLInputTypeAttribute, ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  id: string;
  disabled?: boolean;
  error?: string | undefined;
  value: string | number | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
