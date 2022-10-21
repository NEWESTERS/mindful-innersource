import styled from "styled-components";

interface ButtonProps {
  kind?: "primary" | "secondary";
}

const Button = styled.button<ButtonProps>`
  margin: 0;
  border: 0;
  background-color: ${({ theme, kind = "primary" }) => theme.colors[kind]};
  color: black;
`;

export default Button;
