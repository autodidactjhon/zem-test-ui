import React from "react";

//Components
import ImageContainer from "./ImageContainerComponent";
import OpnionVoteBox from "./OpinionVoteBoxComponent";
import ClosingTimer from "./ClosingTimerComponent";

//Styles
import "./../sass/components/HeaderComponent.scss";

function Header(props) {
  const { daysToClose, imageUrl } = props;

  return (
    <header>
      <ImageContainer imageUrl={imageUrl} />
      <OpnionVoteBox />
      <ClosingTimer daysToClose={daysToClose} />
    </header>
  );
}

export default Header;