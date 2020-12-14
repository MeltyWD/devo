import React from 'react';
import ImageFrame from "./ImageFrame.js"
import ImageFrameDot from "./ImageFrameDot.js"
import svgFrame1 from "../images/svg_frame1.svg";
import svgFrame2 from "../images/svg_frame2.svg";
import svgFrame3 from "../images/svg_frame3.svg";
import svgFrame4 from "../images/svg_frame4.svg";
import { 
  StyledSection, 
  StyledContentBox, 
  StyledTitleText, 
  StyledTitleTextBottom,
  StyledImageContainer,
  StyledTextBox,
  StyledText
} from "./styled/MainStyle.js";

const images = [
  svgFrame1,
  svgFrame2,
  svgFrame3,
  svgFrame4,
];


function Main(props) {
  
  const [ selectFrame, setSelectFrame ] = React.useState(1)

  function clickDot(number) {
    setSelectFrame(number)
  }

  return (
    <>
      <StyledSection>
        <StyledContentBox>
          <StyledTextBox>
            <StyledTitleText>WE:</StyledTitleText>
            <StyledText>Makes solutions</StyledText>
            <StyledText opacity={0.8}>Trains new professionals</StyledText>
            <StyledText opacity={0.6}>Conducts events</StyledText>
            <StyledText opacity={0.4}>Resolves problems</StyledText>
            <StyledText opacity={0.2}>and more</StyledText>
          </StyledTextBox>
          <StyledImageContainer>
            {images.map((image, index) => 
              <ImageFrame 
                key={index}
                image={image}
                index={index + 1}
                frameSelect={selectFrame}
                opacity={0}
              />
              )}
            {images.map((image, index) => 
              <ImageFrameDot 
                key={`dot${index}`}
                index={index + 1}
                onClick={clickDot}
                frameSelect={selectFrame}
              />
            )}
          </StyledImageContainer>
        </StyledContentBox>
        <StyledTitleTextBottom>WE NEED CONTENT!!!!!!</StyledTitleTextBottom>
      </StyledSection>
      
    </>
  )
}

export default Main;