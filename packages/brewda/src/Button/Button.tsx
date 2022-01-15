import type { FC } from "react";
import { StyledButton } from "./StyledButton";

export interface ButtonProps {
  color: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
