import React from "react";

const videoBackground = {
  backgroundColor: "#FFFFFF",
  borderWidth: "thin",
  borderStyle: "solid",
  borderColor: "#000000",
  videoHeader: {
    font: "normal normal normal 12px/18px IBM Plex Sans",
    backgroundColor: "#0000CD",
    paddingLeft: "5%",
    paddingTop: "5%",
    paddingBottom: "3%",
    color: "#FFFFFF",
  },
  videoTitle: {
    color: "#000000",
    font: "normal normal 600 12px/20px IBM Plex Sans",
    paddingTop: "5%",
  },
  videoDescription: {
    color: "#000000",
    padding: "5% 0",
    font: "normal normal normal 10px/18px IBM Plex Sans",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
  },
};

const Video = (props) => {
  return (
    <>
      <div style={videoBackground}>
        <p style={videoBackground.videoHeader}>Video</p>
        <img
          width={"100%"}
          height={"auto"}
          alt={videoBackground.videoTitle}
          src={props.videoImg}
        />
        <p style={videoBackground.videoTitle}>{props.videoTitle}</p>
        <p style={videoBackground.videoDescription}>{props.videoDescription}</p>
      </div>
    </>
  );
};

export default Video;
