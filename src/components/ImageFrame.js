import React from 'react';
import styled from "styled-components";

const StyledImage = styled("img")`
  margin: auto;
  position: absolute;
  top: -40px; left: 0; bottom: 0; right: 0;
  width: 66%;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  transition: .3s;
`

function ImageFrame(props) {
  const [selected, setSelected] = React.useState(false);

  React.useEffect(() => {
    if (props.index === props.frameSelect) {
      setSelected(true)
    } else {
      setSelected(false)
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.frameSelect])

  return (
    <>
      <StyledImage selected={selected} src={props.image} />
    </>
  )
}

export default ImageFrame;

