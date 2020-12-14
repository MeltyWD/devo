import styled from "styled-components";

const StyledSection = styled("section")`
  display: flex;
  flex-direction: column;
  padding: 78px 20%;
  background: #EDF0F5;
`
const StyledTitle = styled("h1")`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #03C1CF;
  margin: 0;
  padding: 18px;
`
const StyledUl = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 210px));
  grid-auto-rows: minmax(140px, 210px);
  gap: 35px 40px;
  list-style: none;
  margin: auto;
  padding: 18px 0;
`

export { StyledSection, StyledTitle, StyledUl }