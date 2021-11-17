import React from "react";

import { Grid, Row, Column} from "carbon-components-react";
import { CTA, Image } from "@carbon/ibmdotcom-react";
import { PlayOutline32 } from '@carbon/icons-react';
const stylesheet = {

    container: {
        background: "#161616",
        color: "#fff",
        padding: "8vh 0",
        background: `url("${process.env.PUBLIC_URL}/img/academicinitiative.jpg") center center / cover no-repeat transparent`,
        backgroundSize: "cover",
      },

    text: {
        marginTop: ".5rem",
        font: "normal normal 300 16px/20px IBM Plex Sans",

        title: {
            font: "normal normal 600 26px/34px IBM Plex Sans"
        },
                       
        textBr: {
            font: "normal normal 300 16px/20px IBM Plex Sans",
            opacity: "1",
            marginTop: ".5rem",
        },
      },

    firstColumn: {
        background: "#161616",
        padding: "4vh",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",

        containerTexts: {
            marginBottom: "2rem"
        },
      
    },

    secondColumn: {
        position: "relative"
    },

    elementPlayer: {
        position: "absolute",
        left: "2rem",
        top: "2rem",
        background: "transparent",
        border: "none",
        zIndex: "1",
        cursor: "pointer",

        element:{
            color: "#000000",
            zIndex: "1",
            width: "4rem",
            height: "4rem",
        }
    },

    elementCircle: {
        position: "absolute",
        right: "2rem",
        bottom: "1rem",
        zIndex: "1",
        background: "#000000",
        width: "7rem",
        height: "7rem",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "rotateZ(22deg)",

        text:{
            font: "normal normal normal 16px/20px IBM Plex Sans",
        }
    }
}


const DigitalContentAcademic = () => {
    return(
        <>
            <div style={stylesheet.container}>
                <Grid>
                    <Row condensed>

                        <Column lg={8} style={stylesheet.firstColumn}>

                            <h1 style={stylesheet.text.title}>IBM Academic Initiative</h1>

                            <div style={stylesheet.firstColumn.containerTexts}>
                                <p style={stylesheet.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <p style={stylesheet.text.textBr}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                <p style={stylesheet.text.textBr}> Stay on top of the latest in technology and education </p>
                            </div>

                            <CTA
                                style={stylesheet.text.link}
                                type="local"
                                copy="Explore free technology"
                                href="https://www.ibm.com/academic"
                            />
                        </Column>

                        <Column lg={8} style={stylesheet.secondColumn}>
                            
                            <button style={stylesheet.elementPlayer}> 
                                <PlayOutline32  style={stylesheet.elementPlayer.element}/>
                            </button>
                    
                            <div style={stylesheet.elementCircle}>
                                <span style={stylesheet.elementCircle.text}>Play tutorial</span>
                            </div>

                            <Image
                                defaultSrc={"../img/academicinitiativewoman.jpg"}
                                alt="academicinitiativewoman"
                            />
                        </Column>
                    </Row>
                </Grid>
            </div>
        </>
    );
}

export default DigitalContentAcademic;