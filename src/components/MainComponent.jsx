import React from "react";

//Components
import Disclaimer from "./../components/DisclaimerComponent";
import GridVotingCards from "./../components/GridVotingCardsComponent";
import SubmitSection from "./../components/SubmitSectionComponent";

//Styles
import "./../sass/components/MainComponent.scss";

function Main(props) {
  const { voting, updateVoting } = props;

  return (
    <main className="container">
      <Disclaimer />
      <p className="title-section">Votes</p>
      <GridVotingCards voting={voting} updateVoting={updateVoting} />
      <SubmitSection />
    </main>
  );
}

export default Main;
