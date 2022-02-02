import React, { useContext, useRef} from 'react'
import { Context } from './Context';

import { Close24 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";

function Viewer() {

    const {dataVideo, visibleViewer, setVisibleViewer, topValue} = useContext(Context);
    const {videoTitle, videoUrl} = dataVideo;

    const iframeRef = useRef("");

    const stylesheet = {
        componentViewerVideo: {
            width: '90%',
            height: '95vh',
            left: '5%',
            background: 'black',
            color: 'white',

            position: 'absolute',

            top: `${topValue + 195}px`,
            zIndex: '111',
            border: 'solid whitesmoke 2px',

            visibility: `${visibleViewer}`,

            display: 'flex',
            flexDirection: 'column'
        },

        componentViewerVideoDetails: {
            width: '100%',
            heigth: '20%',
            borderBottom: 'solid white 2px',
            padding: '0 1rem',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        title: {
            textAlign: 'center',
            color: '#fff',
            font: "normal normal 600 18px/34px IBM Plex Sans",
        },
    }

    const closeViewerVideo = () => {
        // QUANDO A TELA FECHAR, O VÍDEO VAI PARAR DE RODAR
        iframeRef.current.src = ''
        iframeRef.current.src = videoUrl
        setVisibleViewer("hidden");
    }

    return (
        <div style={stylesheet.componentViewerVideo}>
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
                className="component-video"
                ref={iframeRef}
                allowFullScreen
            />
            
        </div>
    )
}

export default Viewer;
