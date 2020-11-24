import React from "react";
import styled from "styled-components";

//Styles
import "./../sass/components/ClosingTimerComponent.scss";

const ProgressBar = styled.div`
  width: ${(props) => props.widthValue}%;
`;

const RightArrow = styled.div`
  left: ${(props) => props.leftValue}%;
`;

function ClosingTimer(props) {
  const { daysToClose } = props;
  const progressMissing = Math.round((daysToClose * 100) / 30);
  const progressComplete = 100 - progressMissing;

  return (
    <div className="closing-timer">
      <ProgressBar widthValue={progressComplete} className="closing-progressed">
        <p className="closing-progressed-text">Closing in</p>
        <RightArrow
          leftValue={progressComplete}
          className="closing-progressed-arrow-right"
        ></RightArrow>
      </ProgressBar>
      <ProgressBar widthValue={progressMissing} className="closing-missing">
        <span className="closing-missing-days">{daysToClose}</span>
        <span className="closing-missing-text">days</span>
      </ProgressBar>
    </div>
  );
}

export default ClosingTimer;