import styled from "styled-components";
import svgBackground from "../../images/svg_backgound.svg";

const StyledSection = styled("section")`
  display: flex;
  flex-direction: column;
  padding: 78px 20%;
  background: #EDF0F5;
`
const StyledContentBox = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledTitleText = styled("h1")`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #03C1CF;
  margin: 0;
  padding-bottom: 10px;
`

const StyledTitleTextBottom = styled(StyledTitleText)`
  margin: 0 auto;
  padding-top: 78px;
  padding-bottom: 0;
`
const StyledImageContainer = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  width: 28.75vw;
  height: 22.15vw;
  background-size: cover;
  background-image: url(${svgBackground});
`

const StyledImageBackground = styled("img")`
  width: 28.75vw;
`
const StyledImage = styled("img")`
  margin: auto;
  position: absolute;
  top: -40px; left: 0; bottom: 0; right: 0;
  width: 66%;
`
const StyledTextBox = styled("div")`
  display: flex;
  flex-direction: column;
  `
const StyledText = styled("p")`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  padding-left: 12px;
  opacity: ${props => props.opacity};
`

export { 
  StyledSection, 
  StyledContentBox, 
  StyledTitleText, 
  StyledTitleTextBottom, 
  StyledImageContainer, 
  StyledImageBackground, 
  StyledImage,
  StyledTextBox,
  StyledText
};