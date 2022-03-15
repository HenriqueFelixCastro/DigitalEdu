import React, {useRef, useEffect, useContext} from "react";
import { Grid, Row, Column, Search } from "carbon-components-react";
import { connect } from "react-redux";
import VideoCard from "./VideoCard.js";

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
  card_wrap_outer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    background: "green"
  },

  card_wrap_inner:{
    padding: "12px",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    background: "pink"
  },
};

const renderVideoCardColumns = (videos) => {
  return videos.map((video) => (
    <Column lg={5} style={{margin: ".5rem", display: "flex", flexDirection: "row", width: "100%"}}>
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

const filterCatalog = (value, selectedTrack, digitalContentSelected, digitalContentFiltered) => {
    return value ? digitalContentFiltered(value) : digitalContentSelected(selectedTrack)
}

const DigitalContentCatalog = ({
  selectedTrack,
  videos,
  digitalContentSelected,
  digitalContentFiltered
}) => {

  const { setTopValue, visibleViewer } = useContext(Context);
  const refElement = useRef(null);

  useEffect(() => {
    setTopValue(refElement.current.offsetTop)
    visibleViewer === 'visible' ? refElement.current.style.filter = 'brightness(0.4)' : refElement.current.style.filter = 'none';
  }, [visibleViewer, setTopValue])

  return(
    <div ref={refElement}>
      <Grid condensed>
        <Row style={stylesheet.videoSection}>
          <Column lg={4} style={stylesheet.trackTitleColumn}>
            <p style={stylesheet.trackTitle}>{selectedTrack}</p>
          </Column>
          <Column lg={12}>
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

      <Grid style={{background: "white"}} condensed>
        <Row style={stylesheet.videoSection}>
          <Column lg={4}>
            <h3 style={stylesheet.sectionTitle} id="videos">Videos</h3>
          </Column>

          <Column lg={12}>
            <Row condensed>
              {renderVideoCardColumns(videos)}
            </Row>
          </Column>
        </Row>
      </Grid>
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
