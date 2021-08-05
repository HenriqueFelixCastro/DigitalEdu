import React from "react";
import { Grid, Row, Column, Search } from "carbon-components-react";
import { TableOfContents } from "@carbon/ibmdotcom-react";
import { connect } from "react-redux";

import VideoCard from "./VideoCard.js";
import TutorialCard from "./TutorialCard.js";

const stylesheet = {
  videoSection: {
    margin: "5vh 0",
  },
  trackTitleColumn: {
    minHeight: "100%",
    marginBottom: "0.5px",
    borderBottom: "1px solid #8d8d8d",
  },
  trackTitle: {
    font: "normal normal 600 26px/34px IBM Plex Sans",
  },
  sectionTitle: {
    font: "normal normal 600 26px/34px IBM Plex Sans",
  },
  sectionTitleTutorials: {
    font: "normal normal 600 26px/34px IBM Plex Sans",
    paddingTop: "5vh",
  },
};

const renderVideoCardColumns = (videos) => {
  return videos.map((video) => (
    <Column lg={5}>
      <VideoCard
        videoTitle={video.videoTitle}
        videoDescription={video.videoDescription}
        videoImg={video.videoImg}
        videoDuration={video.videoDuration}
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

const DigitalContentVideo = ({ selectedTrack, videos, tutorials }) => (
  <>
    <Grid condensed>
      <Row style={stylesheet.videoSection}>
        <Column lg={4} style={stylesheet.trackTitleColumn}>
          <p style={stylesheet.trackTitle}>{selectedTrack}</p>
        </Column>
        <Column lg={11}>
          <Search size={"xl"} />
        </Column>
      </Row>
    </Grid>
    <TableOfContents
      theme={"whute"}
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
      <h3 style={stylesheet.sectionTitle} id="videos">
        Videos
      </h3>
      <Row narrow>{renderVideoCardColumns(videos)}</Row>
      <a name="tutorials"></a>
      <h3 style={stylesheet.sectionTitleTutorials}>Tutorials</h3>
      <Row narrow>{renderTutorialCardColumns(tutorials)}</Row>
    </TableOfContents>
  </>
);

const mapStateToProps = (state) => ({
  selectedTrack: state.ui.content,
  videos: state.ui.videos,
  tutorials: state.ui.tutorials,
});

export default connect(mapStateToProps, null)(DigitalContentVideo);
