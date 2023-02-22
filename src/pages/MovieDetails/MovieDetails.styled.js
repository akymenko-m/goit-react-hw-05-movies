import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;
export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: darkblue;
  text-decoration: none;

  &:hover,
  &:focus {
    color: greenyellow;
  }
  &.active {
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const GoBack = styled(Link)`
  width: 100px;
  height: 30px;
  display: flex;
  padding: 6px;
  color: darkblue;
  text-decoration: none;

  &:hover,
  &:focus {
    border: 2px solid greenyellow;
    border-radius: 10px;
  }
`;
