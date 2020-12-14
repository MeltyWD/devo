import styled from "styled-components";
import React from "react";

const StyledLi = styled("li")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => (`url(${props.icon}) no-repeat center #FFFFFF`)};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 34px;
  padding: 21px
`
const StyledCardSubTitle = styled("p")`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #000000;
`
const StyledTextBox = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const StyledCardTitle = styled("h4")`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
`
const StyledCardNumber = styled("p")`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`

function Card(props) {

  return (
    <StyledLi icon={props.icon}>
      <StyledCardSubTitle>{props.topText}</StyledCardSubTitle>
      <StyledTextBox>
        <StyledCardTitle>{props.name}</StyledCardTitle>
        <StyledCardNumber>{props.members}</StyledCardNumber>
      </StyledTextBox>
    </StyledLi>
  )
}

export default Card;