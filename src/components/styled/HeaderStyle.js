import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const StyledHeader = styled("header")`
  display: flex;
  justify-content: space-between;
  padding: 26px 20%;
  color: palevioletred;
  background: #fff;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.1);
`;

const StyledNav = styled("nav")`
  display: flex;
  align-items: center;
`

const StyledNavLink = styled(NavLink)`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  color: #000000;
  transition: ease .3s;

  &:not(:last-child) {
    margin-right: 34px
  }

  &.navlink_active {
    text-shadow:
    0 .3px .8px #444,
    0 -.3px .8px #444,
    .3px 0 .8px #444,
    -.3px 0 .8px #444;
  }
`

export { StyledHeader, StyledNav, StyledNavLink }