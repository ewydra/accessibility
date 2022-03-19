import styled from "styled-components";
import { useContrastMode } from "../contexts/ContrastContext";
import { Button } from "./Button";
import { NavLink } from "./NavLink";

const NavigationBar = styled.div`
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
    <NavigationBar title="Navigation bar">
      <div role="banner">
        <h1>Shop</h1>
      </div>
      <nav>
        <NavLinks>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </NavLinks>
      </nav>
      <Button variant="dark" onClick={changeContrastMode}>
        High-contrast mode
      </Button>
    </NavigationBar>
  );
}
