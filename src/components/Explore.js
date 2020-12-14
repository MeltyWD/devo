import styled from "styled-components";
import { NavLink, Link, useRouteMatch  } from 'react-router-dom';

const StyledHeader = styled("div")`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vw;
  width: 100vw;
  padding: 0;
  background: #EDF0F5;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.1);
`;

const StyledLeftBar = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 176px;
  background: #fff;
  height: 100%;
`

const StyledNav = styled("nav")`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 18px;
`

const StyledLogo = styled(Link)`
  margin: 37px auto;
`

const StyledNavLink = styled(NavLink)`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  transition: ease .3s;
  padding-bottom: 13px;

  &.navlink_active {
    color: #000;
  }
`

function Explore(props) {

  const { url } = useRouteMatch();

  return (
    <StyledHeader>
      <StyledLeftBar>
        <StyledLogo to="/"><img src={props.headerLogo} alt="Logo devo" /></StyledLogo>   
        <StyledNav>
          <StyledNavLink activeClassName="navlink_active" to={`${url}/my-profile`}>Мой профиль</StyledNavLink>
          <StyledNavLink activeClassName="navlink_active" to={`${url}/my-teams`}>Мои команды</StyledNavLink>
          <StyledNavLink activeClassName="navlink_active" to={`${url}/my-projects`}>Мои проекты</StyledNavLink>
          <StyledNavLink activeClassName="navlink_active" to={`${url}/my-portfolio`}>Мое портфолио</StyledNavLink>
          <StyledNavLink activeClassName="navlink_active" to={`${url}/settings`}>Настройки</StyledNavLink>
        </StyledNav>
      </StyledLeftBar>
    </StyledHeader>
  )
}

export default Explore;