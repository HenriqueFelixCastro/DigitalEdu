import React, { useEffect } from "react";
import { Row, Column, Loading } from "carbon-components-react";
import { Video24 } from "@carbon/icons-react";
import { connect } from "react-redux";

import { videoSelected } from "../../actions/ui";

const stylesheet = {
  categoryRow: {
    margin: "3vh 2vw",
    borderTop: "1px solid #707070",
    padding: "2vh 0",
  },
  categoryColumn: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    label: {
      font: "normal normal normal 16px/20px IBM Plex Sans",
      paddingLeft: ".5vw",
    },
  },
  regularRow: {
    margin: "2vh 2vw",
  },
  videoTitle: {
    font: "normal normal 300 36px/29px IBM Plex Sans",
  },
};

const VideoView = ({ video, pathname, videoSelected }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    let selectedVideoId = /[^/]*$/.exec(pathname)[0]; // Gets last substring after last slash
    videoSelected(selectedVideoId);
  }, [pathname, videoSelected]);

  if (video && Object.keys(video).length === 0) {
    return (
      <>
        <Row style={stylesheet.categoryRow}>
          <Column lg={2}>
            <div style={stylesheet.categoryColumn}>
              <Video24 />
              <h3 style={stylesheet.categoryColumn.label}>Video</h3>
            </div>
          </Column>
        </Row>
        <Row style={stylesheet.regularRow}>
          <Loading />
        </Row>
      </>
    );
  }

  if (!video) {
    return (
      <>
        <Row style={stylesheet.categoryRow}>
          <Column lg={2}>
            <div style={stylesheet.categoryColumn}>
              <Video24 />
              <h3 style={stylesheet.categoryColumn.label}>Video</h3>
            </div>
          </Column>
        </Row>

        <Row style={stylesheet.regularRow}>
          <Column lg={12}>
            <h2 style={stylesheet.videoTitle}>Video not found</h2>
          </Column>
        </Row>
      </>
    );
  }

  return (
    <>
      <Row style={stylesheet.categoryRow}>
        <Column lg={2}>
          <div style={stylesheet.categoryColumn}>
            <Video24 />
            <h3 style={stylesheet.categoryColumn.label}>Video</h3>
          </div>
        </Column>
      </Row>

      <Row style={stylesheet.regularRow}>
        <Column>
          <iframe
            width="100%"
            height="520px"
            title={video.videoTitle}
            src={video.embedWatsonMediaSrc}
            scrolling="no"
            allowfullscreen
            webkitallowfullscreen
            frameborder="0"
            style={{ border: "0 none transparent" }}
          ></iframe>
        </Column>
      </Row>

      <Row style={stylesheet.regularRow}>
        <Column lg={12}>
          <h2 style={stylesheet.videoTitle}>{video.videoTitle}</h2>
        </Column>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  video: state.ui.videoSelected,
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps, { videoSelected })(VideoView);
