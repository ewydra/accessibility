import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s border-bottom;
  padding: 4px;

  ${(props) =>
    props.theme.mode === "highContrast" &&
    `
      color: ${props.theme.colors.primary.main};
      &:hover {
        color: ${props.theme.colors.secondary};
      }
    `}

  ${(props) =>
    props.theme.mode === "default" &&
    `
      &:hover {
        border-bottom: 2px solid ${props.theme.colors.primary.main};
      }
  `}
`;
