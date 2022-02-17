import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Context } from './Context'

import DigitalContentHero from "./DigitalContentHero";
import DigitalContentMenu from "./DigitalContentMenu";
import DigitalContentCatalog from "./DigitalContentCatalog";
import DigitalContentAcademic from "./DigitalContentAcademic";
import Viewer from "./Viewer";

import { digitalContentSelected } from "../../actions/ui";
import { DIGITAL_CONTENT_AVAILABLE } from "../../actions/actionTypes";


const DigitalContentPage = ({ pathname, digitalContentSelected }) => {

  const [dataVideo, setDataVideo] = useState("");
  const [visibleViewer, setVisibleViewer] = useState("hidden");
  const [topValue, setTopValue] = useState("");

  // Loads the desired track if pathname (URL) changes
  useEffect(() => {
    let selectedTrack = /[^/]*$/.exec(pathname)[0]; // Gets last substring after last slash

    switch (selectedTrack) {
      case "cloud":
        return digitalContentSelected(
          DIGITAL_CONTENT_AVAILABLE.CLOUD_COMPUTING
        );
      case "data-science":
        return digitalContentSelected(DIGITAL_CONTENT_AVAILABLE.DATA_SCIENCE);
      case "quantum":
        return digitalContentSelected(
          DIGITAL_CONTENT_AVAILABLE.QUANTUM_COMPUTING
        );
      case "others":
        return digitalContentSelected(
          DIGITAL_CONTENT_AVAILABLE.OTHER_TECHNOLOGIES
        );
      default:
        return digitalContentSelected(
          DIGITAL_CONTENT_AVAILABLE.ARTIFICIAL_INTELLIGENCE
        );
      // AI is default for Reducer and page as well
    }
  }, [pathname, digitalContentSelected]);

  return (
    <>
    <Context.Provider value={{dataVideo, setDataVideo, visibleViewer, setVisibleViewer, topValue, setTopValue}}>
      <Viewer />
      <DigitalContentHero />
      <DigitalContentMenu />
      <DigitalContentCatalog />
      <DigitalContentAcademic />
    </Context.Provider>
    </>
  );
};

const mapStateToProps = (state) => ({
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps, { digitalContentSelected })(
  DigitalContentPage
);
