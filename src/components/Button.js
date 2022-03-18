import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) =>
    props.variant === "light" || props.theme.mode === "highContrast"
      ? props.theme.colors.primary.main
      : props.theme.colors.text};
  color: ${(props) => props.theme.colors.primary.text};
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-family: Helvetica, sans-serif;
  font-size: 0.9em;
  cursor: pointer;

  ${(props) =>
    props.theme.mode === "highContrast" &&
    `
      &:hover {
        background-color: ${props.theme.colors.secondary};
      }
    `}
`;

export function Button({ variant = "light", children, ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
