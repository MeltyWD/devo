import React from 'react';
import styled from "styled-components";

const StyledDot = styled("div")`
  width: 8.57px;
  height: 8.57px;
  background: ${(props) => (props.selected ? "#03C1CF" : "#CBCBCB")};
  border-radius: 50%;
  cursor: pointer;
  margin: 0 7px 10.73% 0;
  transition: .3s;
`

function ImageFrameDot(props) {
  const [selected, setSelected] = React.useState(false);

  React.useEffect(() => {
    if (props.index === props.frameSelect) {
      setSelected(true)
    } else {
      setSelected(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.frameSelect])
  
  
  return (
    <>
      <StyledDot selected={selected} onClick={() => props.onClick(props.index)} />
    </>
  )
}

export default ImageFrameDot;