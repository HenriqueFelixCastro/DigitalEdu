import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const stylesheet = {
  videoCard: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3vh",
  },
  videoHeader: {
    font: "normal normal normal 16px/20px IBM Plex Sans",
    background: "#4533EC 0% 0% no-repeat padding-box",
    padding: "1vh 0",
    paddingLeft: "3%",
    color: "#FFFFFF",
  },
  videoBorder: {
    border: "1px solid #707070",
    padding: "3%",
  },
  videoTitle: {
    font: "normal normal 600 16px/20px IBM Plex Sans",
    color: "#2C2C2C",
    paddingTop: "2vh",
  },
  videoDescription: {
    font: "normal normal 300 14px/18px IBM Plex Sans",
    color: "#363636",
    padding: "2vh 0",
  },
  videoDuration: {
    font: "normal normal normal 12px/15px IBM Plex Sans",
    color: "#000",
    paddingBottom: "2vh",
  },
};

const VideoCard = (props) => {
  return (
    <div
      style={stylesheet.videoCard}
      onClick={() => {
        props.push(`${process.env.PUBLIC_URL}/#watch/${props.videoId}`);
      }}
    >
      <div style={stylesheet.videoHeader}>
        <p>Video</p>
      </div>
      <img
        width={"100%"}
        height={"auto"}
        src={props.videoImg}
        alt={props.videoTitle}
      />
      <div style={stylesheet.videoBorder}>
        <p style={stylesheet.videoTitle}>{props.videoTitle}</p>
        <p style={stylesheet.videoDescription}>{props.videoDescription}</p>
        <p style={stylesheet.videoDuration}>Duration: {props.videoDuration}</p>
      </div>
    </div>
  );
};

export default connect(null, { push })(VideoCard);
