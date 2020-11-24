import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-image: url(${(props) => props.imageUrl});
  height: 740px;
  width: 100%;
  box-shadow: inset 0 110px 40px rgb(93 91 91 / 50%);
`;

function ImageContainer(props) {
    const { imageUrl } = props;

    return <Background imageUrl={imageUrl} />;
}

export default ImageContainer;