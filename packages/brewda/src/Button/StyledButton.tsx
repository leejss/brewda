import type { ButtonProps } from "./Button";
import styled from "styled-components";
// import variable from "@jake/colors/src/variable.scss";

// console.log(variable);

export const StyledButton = styled.button<ButtonProps>`
  /* background-color: ${(props) =>
    props.color === "primary" && variable.primary}; */
`;
