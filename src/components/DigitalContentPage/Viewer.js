import React, { useContext, useRef} from 'react'
import { Context } from './Context';

import { Close24 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";

const stylesheet = {
  componentViewerVideoDetails: {
    width: '100%',
    heigth: '20%',
    borderBottom: 'solid rgba(255,255,255, .9) 2px',
    padding: '0 1rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    textAlign: 'center',
    color: '#fff',
    font: "normal normal 600 14px/34px IBM Plex Sans",
  },
}

const Viewer = () => {

    const {dataVideo, visibleViewer, setVisibleViewer, topValue} = useContext(Context);
    const {videoTitle, videoUrl} = dataVideo;

    const iframeRef = useRef("");

    const closeViewerVideo = () => {
        iframeRef.current.src = ''
        iframeRef.current.src = videoUrl
        setVisibleViewer("hidden");
    }

    const stylesheetViewerVideo = {
      background: 'black',
      color: 'white',
  
      position: 'absolute',
  
      top: `${topValue + 195}px`,
      zIndex: '111',
      border: 'solid rgba(255,255,255, .9) 2px',
  
      visibility: `${visibleViewer}`,
  
      display: 'flex',
      flexDirection: 'column',
  
      width: '90%',
      height: '95vh',
      left: "5%"
    }

    
    return (
        <div style={stylesheetViewerVideo} className="component-viewer-video">
            <div style={stylesheet.componentViewerVideoDetails}>
                <h1 style={stylesheet.title}>{videoTitle}</h1>
                <Button 
                    kind="ghost"
                    onClick={closeViewerVideo}>
                    <Close24 />
                </Button>
            </div>

            <iframe 
                width="100%" 
                height="100%"
                title={videoTitle}
                src={videoUrl}
                scrolling='no'
                className="component-video"
                ref={iframeRef}
                allowFullScreen
                webkitallowfullscreen
                frameBorder="0"
            /> 
        </div>
    )
}

export default Viewer;
