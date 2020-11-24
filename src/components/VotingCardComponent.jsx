import React, { Component } from "react";
import styled from "styled-components";

//Components
import Button from "./ButtonComponent";

//Constants
import { ICONS_PATH, IMAGES_PATH } from "../constants/paths.constants.json";
import { DISLIKE_ICON,LIKE_ICON } from "./../constants/assets.constants.json";

//Styles
import "./../sass/components/VotingCardComponent.scss";

const CardBackground = styled.div`
  background-image: url(${(props) => props.imageUrl});
  box-shadow: inset 0 -250px 40px rgb(16 16 15 / 50%);
`;

const VotingStatistics = styled.div`
  width: ${(props) => props.widthValue}%;
`;

class VotingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnType: null,
      votingEnable: true,
    };
  }

  setActionType = (btnType) => {
    this.setState({ btnType });
  }

  toggleVoting = (toggle) => {
    if (toggle) {
      this.setState({ btnType: null, votingEnable: toggle });
    } else {
      this.setState({ votingEnable: toggle });
    }
  }

  callUpdateVoting = (id, btnType) => {
    const { updateVoting } = this.props;

    updateVoting(id, btnType);
    this.toggleVoting(false)
  }

  render() {
    const { data } = this.props;
    const { btnType, votingEnable } = this.state;
    const imageUrl = `${IMAGES_PATH}${data.image}`;
    const likeIconUrl = `${ICONS_PATH}${LIKE_ICON}`;
    const dislikeIconUrl = `${ICONS_PATH}${DISLIKE_ICON}`;
    const isDisabled = btnType === null;
    
    return (
      <CardBackground imageUrl={imageUrl} className="voting-card">
        <div className="votin-card-info">
          <div className="votin-card-title">{data.title}</div>
          <div className="votin-card-subtitle">
            <span className="voting-card-text">{data.date} </span>
            <span>{data.topic}</span>
          </div>
          <div className="votin-card-description">
            { votingEnable
              ? <p>{data.description}</p>
              : <p>Thank you for voting!</p>
            }
          </div>
          <div className="votin-card-controls">
            { votingEnable
              ? <>
                  <Button btnType={"like"} onClick={() => this.setActionType("like")} />
                  <Button btnType={"dislike"} onClick={() => this.setActionType("dislike")} />
                  <Button btnType={"vote"} text={"Vote now"} disabled={isDisabled} onClick={() => this.callUpdateVoting(data.id, btnType)}/>
                </>
              : <Button btnType={"vote"} text={"Vote again"} onClick={() => this.toggleVoting(true)} />
            }
          </div>
        </div>
        <div className="voting-statistics">
          <VotingStatistics
            widthValue={data.likes}
            className="voting-statistics-like"
          >
            <img src={likeIconUrl} alt="" />
            <span>{data.likes}%</span>
          </VotingStatistics>
          <VotingStatistics
            widthValue={data.dislikes}
            className="voting-statistics-dislike"
          >
            <span>{data.dislikes}%</span>
            <img src={dislikeIconUrl} alt="" />
          </VotingStatistics>
        </div>
      </CardBackground>
    );
  }
}

export default VotingCard;
