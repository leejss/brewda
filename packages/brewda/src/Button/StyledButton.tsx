import type { ButtonProps } from "./Button";
import styled from "styled-components";
import { success } from "@jake/colors";

export const StyledButton = styled.button<ButtonProps>`
  color: ${success.main};
`;
