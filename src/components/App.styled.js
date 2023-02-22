import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: darkblue;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 0;
  color: white;
  text-decoration: none;

  &:hover,
  &:focus {
    color: greenyellow;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const Main = styled.div`
  padding: 10px 20px 20px;
`;
