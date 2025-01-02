import { MouseEvent } from "react";

export type ButtonType = "reset";

export interface ButtonProps {
  name: string | undefined;
  type?: ButtonType;
  onClick?: (event: MouseEvent) => void;

}
