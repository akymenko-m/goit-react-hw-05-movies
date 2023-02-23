import { Outlet } from 'react-router-dom';
import { HeaderStyled, Main, Nav, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <div>
      <HeaderStyled>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Search movies</StyledNavLink>
        </Nav>
      </HeaderStyled>

      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Header;
