import styled from "styled-components";
import logoFooter from "../images/logo_footer.svg"

const StyledFooter = styled("footer")`
  display: flex;
  justify-content: space-between;
  padding: 49px 20%;
  background: rgba(3, 193, 207, 1);
`

const StyledFooterText = styled("p")`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;

  color: #FFFFFF;
`



function Footer(props) {
  return (
    <StyledFooter>
      <img src={logoFooter} alt="Лого" />
      <StyledFooterText>2020</StyledFooterText>
    </StyledFooter>
  )
}

export default Footer;