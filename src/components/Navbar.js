import styled from "styled-components";
import { useContrastMode } from "../contexts/ContrastContext";
import { Button } from "./Button";
import { NavLink } from "./NavLink";

const Navigation = styled.nav`
  padding: 0 24px;
  background-color: ${(props) => props.theme.colors.navbar};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
`;

export function Navbar() {
  const { changeContrastMode } = useContrastMode();

  return (
    <Navigation>
      <h1>Shop</h1>
      <NavLinks>
        <li>
          <NavLink to="/" aria-label="Home page">
            Home
          </NavLink>
        </li>
      </NavLinks>
      <Button
        variant="dark"
        aria-label="Switch contrast mode"
        onClick={changeContrastMode}
      >
        High-contrast mode
      </Button>
    </Navigation>
  );
}
