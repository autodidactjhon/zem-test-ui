import React from "react";
import styled from "styled-components";

//Components
import Button from "./../components/ButtonComponent";

//Constants
import { IMAGES_PATH } from "./../constants/paths.constants.json";

//Styles
import "./../sass/components/SubmitSectionComponent.scss";

const Background = styled.div`
  background-image: url(${(props) => props.imageUrl});
`;

function SubmitSection() {
  const imageUrl = `${IMAGES_PATH}people.png`;

  return (
    <div className="submit-section">
      <Background
        className="submit-section-background"
        imageUrl={imageUrl}
      ></Background>
      <p>Is there anyone else you would want us to add?</p>
      <Button btnType={"submit"} text={"Submit a Name"}/>
    </div>
  );
}

export default SubmitSection;