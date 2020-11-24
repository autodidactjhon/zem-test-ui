import React from "react";

//Styles
import "./../sass/components/DisclaimerComponent.scss";

function Disclaimer() {

  return (
    <div className="disclaimer">
      <div className="content-left">
        <p className="content-left--secondary-text">Speak out. Be heard.</p>
        <p className="content-left--main-text">Be counted</p>
      </div>
      <div className="content-right">
        <p className="content-right-text">
          Rule of Thumb is a crow sourced court of public opinion where anyone and averyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <div className="content-close"></div>
    </div>
  );
}

export default Disclaimer;
