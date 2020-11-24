import React from "react";

//Components
import VotingCard from "./../components/VotingCardComponent";

//Styles
import "./../sass/components/GridVotingCardsComponent.scss";

function GridVotingCards(props) {
  const { voting, updateVoting } = props;

  const cards = voting.map((item) => {
    return (
      <VotingCard
        data={item}
        updateVoting={updateVoting}
        key={item.id} />
    );
  });

  return (
    <div className="grid-voting-cards">
      {cards}
    </div>
  );
}

export default GridVotingCards;
