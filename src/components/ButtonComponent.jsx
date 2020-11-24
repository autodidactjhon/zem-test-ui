import React from "react";
import styled from "styled-components";

//Constants
import { ICONS_PATH } from "./../constants/paths.constants.json";

//Styles
import "./../sass/components/ButtonComponent.scss";

//Props
Button.defaultProps = {
  btnType: "like" | "dislike" | "vote" | "submit",
  disabled: false,
  text: "",
  onClick: () => {},
};

const ButtonStyled = styled.button`  
  ${(props) => props.btnType === "like" && `
    background-image: url(${ICONS_PATH}like-icon.png);
  `}
  ${(props) => props.btnType === "dislike" && `
    background-image: url(${ICONS_PATH}dislike-icon.png);
  `}
`;

function Button(props) {
  const { btnType, disabled, text, onClick } = props;

  return (
    <ButtonStyled
      className={`button ${btnType}`}
      btnType={btnType}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
}

export default Button;
