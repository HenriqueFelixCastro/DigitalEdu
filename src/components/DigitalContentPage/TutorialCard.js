import React from "react";

const stylesheet = {
  tutorialCard: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3vh",
  },
  tutorialHeader: {
    font: "normal normal normal 16px/20px IBM Plex Sans",
    background: "#3371EC 0% 0% no-repeat padding-box",
    padding: "1vh 0",
    paddingLeft: "3%",
    color: "#FFFFFF",
  },
  tutorialBorder: {
    border: "1px solid #707070",
    padding: "3%",
  },
  tutorialTitle: {
    font: "normal normal medium 24px/32px IBM Plex Sans",
    color: "#2C2C2C",
    paddingTop: "2vh",
    fontWeight: "bold",
  },
  tutorialDescription: {
    font: "normal normal 300 14px/18px IBM Plex Sans",
    color: "#363636",
    padding: "2vh 0",
  },
  tutorialDuration: {
    font: "normal normal normal 12px/15px IBM Plex Sans",
    color: "#000",
    paddingBottom: "2vh",
  },
};

const TutorialCard = (props) => {
  return (
    <div style={stylesheet.tutorialCard}>
      <div style={stylesheet.tutorialHeader}>
        <p>Tutorial</p>
      </div>
      <div style={stylesheet.tutorialBorder}>
        <p style={stylesheet.tutorialTitle}>{props.tutorialTitle}</p>
        <p style={stylesheet.tutorialDescription}>
          {props.tutorialDescription}
        </p>
        <p style={stylesheet.tutorialDuration}>
          Duration: {props.tutorialDuration}
        </p>
      </div>
    </div>
  );
};

export default TutorialCard;
