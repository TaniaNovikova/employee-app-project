import { MouseEvent } from "react";

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  name: string | undefined;
  type?: ButtonType;
  imgSrc?: string | undefined;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  isRed?: boolean;
  backgroundColor?: string;
  fontColor?: string;
}
