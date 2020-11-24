import React from "react";

//Components
import Header from "./../components/HeaderComponent";
import Main from "./../components/MainComponent";
import Footer from "./../components/FooterComponent";

//Styles
import "./../sass/components/LayoutComponent.scss";

function Layout(props) {
  const { headerProps, mainProps } = props;

  return (
    <div className="layout">
      <Header {...headerProps} />
      <Main {...mainProps} />
      <Footer/>
    </div>
  );
}

export default Layout;