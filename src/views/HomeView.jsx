import React, { Component } from 'react';

//Components
import Layout from "./../components/LayoutComponent";

//Constants
import { IMAGES_PATH } from "./../constants/paths.constants.json";

//Data
import data from "./../data/data.json";

//Styles
import "./../sass/views/HomeView.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    const persistentData = sessionStorage.getItem('voting');

    if (persistentData) {
      this.state = { voting: persistentData };
    } else {
      sessionStorage.setItem("voting", JSON.stringify(data));
      this.state = { voting: data };
    }
  }

  updateVoting = (id, action) => {
    const { voting } = this.state;
    let votingParsed = JSON.parse(voting);

    if (action === "like") {
      votingParsed[id - 1].likes = votingParsed[id - 1].likes + 1;
      votingParsed[id - 1].dislikes = votingParsed[id - 1].dislikes - 1;
    } else if (action === "dislike") {
      votingParsed[id - 1].likes = votingParsed[id - 1].likes - 1;
      votingParsed[id - 1].dislikes = votingParsed[id - 1].dislikes + 1;
    }

    this.setState({ voting: JSON.stringify(votingParsed) });
    sessionStorage.setItem("voting", JSON.stringify(votingParsed));
  }

  render() {
    const { voting } = this.state;

    const headerProps = {
      daysToClose: 22,
      imageUrl: `${IMAGES_PATH}pope-francisco.png`,
    };
    const mainProps = {
      voting: JSON.parse(voting),
      updateVoting: this.updateVoting
    };

    return <Layout headerProps={headerProps} mainProps={mainProps} />;
  }
}

export default Home;