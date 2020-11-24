import React from "react";

//Constants
import { ICONS_PATH } from "./../constants/paths.constants.json";
import { FACEBOOK_ICON, TWITTER_ICON } from "./../constants/assets.constants.json";

//Styles
import "./../sass/components/FooterComponent.scss";

function Footer() {
  const facebookIconUrl = `${ICONS_PATH}${FACEBOOK_ICON}`;
  const twitterIconUrl = `${ICONS_PATH}${TWITTER_ICON}`;

  return (
    <footer className="container">
      <ul>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <ul>
        <li><a href="#">Follow Us</a></li>
        <li><a href="#"><img src={facebookIconUrl} alt="" /></a></li>
        <li><a href="#"><img src={twitterIconUrl} alt="" /></a></li>
      </ul>
    </footer>
  );
}

export default Footer;
