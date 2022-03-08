import React, { useContext } from "react";
import { Context } from './Context';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { PlayOutline32  } from '@carbon/icons-react';

const stylesheet = {
  videoCard: {
    border: "1px solid #707070",
    background: "transparent",
    display: "flex", 
    flexDirection: "column",
    width: "100%"
  },

  videoHeader: {
    font: "normal normal normal 16px/20px IBM Plex Sans",
    background: "#4533EC 0% 0% no-repeat padding-box",
    padding: "1vh 1vh",
    paddingLeft: "3%",
    color: "#FFFFFF",
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
    paddingBottom: "1vh",
  },

  cardIframe: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  imageVideo:{
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  iconPlayVideo:{
    width: "45%",
    height: "45%",
    position: 'absolute',
    color: "rgba(255,255,255, .9)"
  }

};

const VideoCard = (props) => {

  const { setDataVideo, setVisibleViewer, topValue} = useContext(Context);

  const showViewerVideo = () => {
    setDataVideo(props)
      setTimeout(() => {
        setVisibleViewer("visible");
        window.scrollTo(0, topValue + 180)
      },2000)
  }

  return (
    <main style={stylesheet.videoCard}>
        <div style={stylesheet.videoHeader}>
          <p>Vídeo</p>
        </div>

        <div style={stylesheet.imageVideo}
          onClick={() => showViewerVideo()}>
          <img
            width={"100%"}
            height={"100%"}
            src={props.videoImg}
            alt={props.videoTitle}
          />
         <PlayOutline32 style={stylesheet.iconPlayVideo}/>
        </div>

        <div style={{padding: "10px 12px"}}>
          <p style={stylesheet.videoTitle}>{props.videoTitle}</p>
          <p style={stylesheet.videoDescription}>{props.videoDescription}</p>
          <p style={stylesheet.videoDuration}>Duration: {props.videoDuration}</p>
        </div>
    </main>
  );
};

export default connect(null, { push })(VideoCard);


