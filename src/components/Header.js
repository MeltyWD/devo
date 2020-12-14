import { StyledHeader, StyledNav, StyledNavLink } from './styled/HeaderStyle.js'
import { Link } from 'react-router-dom';


function Explore(props) {
  return (
    <StyledHeader>
      <Link to="/"><img src={props.headerLogo} alt="Logo devo" /></Link>   
      <StyledNav>
        <StyledNavLink activeClassName="navlink_active" exact to="/">About us</StyledNavLink>
        <StyledNavLink activeClassName="navlink_active" to="/teams">Teams</StyledNavLink>
        <StyledNavLink activeClassName="navlink_active" to="/projects">Projects</StyledNavLink>
        <StyledNavLink activeClassName="navlink_active" to="/explore/my-profile">Explore</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  )
}

export default Explore;