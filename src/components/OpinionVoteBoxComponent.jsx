import React from "react";

//Constants
import { ICONS_PATH } from "./../constants/paths.constants.json";
import {
  DISLIKE_ICON,
  LIKE_ICON,
  WIKI_ICON,
} from "./../constants/assets.constants.json";

//Styles
import "./../sass/components/OpinionVoteBoxComponents.scss";

function OpnionVoteBox() {
  const likeIconUrl = `${ICONS_PATH}${LIKE_ICON}`;
  const dislikeIconUrl = `${ICONS_PATH}${DISLIKE_ICON}`;
  const wikiIconUrl = `${ICONS_PATH}${WIKI_ICON}`;

  return (
    <div className="vote-box-container">
      <div className="vote-box-info">
        <p className="vote-box--subtitle">What's your opinion on</p>
        <h1 className="vote-box--title">Pope Francins?</h1>
        <p className="vote-box--description">
          He's talking tough on clergy sexual abuse, buts is he just another
          papar pevert protection? (thumbs down) or a true pedophile punishing
          pontiff? (thumbs up)
        </p>
        <p className="vote-box--hiper-link">
          <img src={wikiIconUrl} alt="" />
          <a href="#">More information</a>
        </p>
        <p className="vote-box--text-bottom">What's Your Verdict?</p>
      </div>
      <div className="vote-box-verdict">
        {/**TODO: These elements could be another component */}
        <div className="verdict like">
          <img src={likeIconUrl} alt="" />
        </div>
        <div className="verdict dislike">
          <img src={dislikeIconUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OpnionVoteBox;