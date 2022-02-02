import React, {useRef, useEffect, useContext} from "react";
import { Grid, Row, Column, Search } from "carbon-components-react";
import { TableOfContents } from "@carbon/ibmdotcom-react";
import { connect } from "react-redux";

import VideoCard from "./VideoCard.js";
import TutorialCard from "./TutorialCard.js";

import { Context } from './Context';

import {
  digitalContentSelected,
  digitalContentFiltered,
} from "../../actions/ui.js";

const stylesheet = {

  videoSection: {
    margin: "5vh 0",
  },
  trackTitleColumn: {
    minHeight: "100%",
    color: "#fff",
    marginBottom: "0.5px",
    borderBottom: "1px solid #8d8d8d",
  },
  trackTitle: {
    font: "normal normal 600 26px/34px IBM Plex Sans",
  },
  sectionTitle: {
    font: "normal normal 600 26px/34px IBM Plex Sans",
    marginTop: '3vh'
  },
  sectionTitleTutorials: {
    font: "normal normal 600 26px/34px IBM Plex Sans",
    paddingTop: "5vh",
  },
};


const renderVideoCardColumns = (videos) => {
  return videos.map((video) => (
    <Column lg={5} style={{margin: "2vh 0"}}>
      <VideoCard
        videoTitle={video.videoTitle}
        videoDescription={video.videoDescription}
        videoImg={video.videoImg}
        videoDuration={video.videoDuration}
        videoId={video.id}
        videoUrl={video.embedWatsonMediaSrc}
      />
    </Column>
  ));
};

const renderTutorialCardColumns = (tutorials) => {
  return tutorials.map((tutorial) => (
    <Column lg={5}>
      <TutorialCard
        tutorialTitle={tutorial.tutorialTitle}
        tutorialDescription={tutorial.tutorialDescription}
        tutorialImg={tutorial.tutorialImg}
        tutorialDuration={tutorial.tutorialDuration}
      />
    </Column>
  ));
};

const filterCatalog = (
  value,
  selectedTrack,
  digitalContentSelected,
  digitalContentFiltered
) => {
  if (value === "") {
    // User reseted filter
    return digitalContentSelected(selectedTrack);
  }
  return digitalContentFiltered(value);
};

const DigitalContentCatalog = ({
  selectedTrack,
  videos,
  tutorials,
  digitalContentSelected,
  digitalContentFiltered
}) => {

  const { setTopValue, visibleViewer } = useContext(Context);
  const refElement = useRef(null);

  useEffect(() => {
    setTopValue(refElement.current.offsetTop)
    visibleViewer === 'visible' ? refElement.current.style.filter = 'brightness(0.4)' : refElement.current.style.filter = 'none';
  }, [visibleViewer])

  return(
    <div ref={refElement}>
      <Grid condensed>
        <Row style={stylesheet.videoSection}>
          <Column lg={4} style={stylesheet.trackTitleColumn}>
            <p style={stylesheet.trackTitle}>{selectedTrack}</p>
          </Column>
          <Column lg={11}>
            <Search
              size={"xl"}
              onChange={(event) =>
                filterCatalog(
                  event.target.value,
                  selectedTrack,
                  digitalContentSelected,
                  digitalContentFiltered
                )
              }
            />
          </Column>
        </Row>
      </Grid>
      <TableOfContents
        theme={"white"}
        menuItems={[
          {
            title: "Videos",
            id: "videos",
          },
          {
            title: "Tutorials",
            id: "tutorials",
          },
        ]}
      >
        <a name="videos"></a>
        <h3 style={stylesheet.sectionTitle} id="videos">Videos</h3>
        <Row narrow>{renderVideoCardColumns(videos)}</Row>
        <a name="tutorials"></a>
        <h3 style={stylesheet.sectionTitleTutorials}>Tutorials</h3>
        <Row narrow style={{marginBottom: "5vh"}}>{renderTutorialCardColumns(tutorials)}</Row>
      </TableOfContents>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedTrack: state.ui.content,
  videos: state.ui.videos,
  tutorials: state.ui.tutorials,
});

export default connect(mapStateToProps, {
  digitalContentSelected,
  digitalContentFiltered,
})(DigitalContentCatalog);
