import React from "react";

import { Grid, Row, Column } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";

const stylesheet = {

    container: {
        background: "#161616",
        color: "#fff",
        padding: "5rem 0"
    },

    text: {
        marginTop: "2rem",
        font: "normal normal normal 16px/20px IBM Plex Sans",
                       
        textBr: {
            font: "normal normal normal 16px/20px IBM Plex Sans",
            opacity: "1",
            marginTop: "1rem",
        },
                
        nameTitle: {
            font: "normal normal 600 16px/18px IBM Plex Sans",
            marginTop: "2.5rem"
        },
                
        jobTitle: {
            font: "normal normal 300 14px/18px IBM Plex Sans"               
        },
                
        cite: {
            font: "italic normal 300 42px/55px IBM Plex Sans",
            marginTop: ".5rem"
        }
    },
    
    titleRow: {
        paddingTop: "1rem",
        borderTop: "1px solid #707070",
    },

    sectionTitle: {
        display: "flex",

        span: {
            font: "normal normal 600 16px/20px IBM Plex Sans"
        },
    },

    depoimentoRow: {
        marginTop: "4vh",
        display: "flex",
        flexDirection: "row-reverse"
    },

    depoimentoColumn: {
        background: "#1F7E48 0% 0% no-repeat padding-box",
        color: "#fff",
        padding: "2%",
    },
}

const HighligthedDepoimentoSecond = () => {
    return(
        <>
            <div style={stylesheet.container}>
                <Grid condensed>
                    <Row style={stylesheet.titleRow}>
                        <Column lg={6}>
                            <div style={stylesheet.sectionTitle}>
                                <p style={stylesheet.sectionTitle.span}>Depoimento</p>
                            </div>
                        </Column>
                    </Row>

                    <Row style={stylesheet.depoimentoRow}>

                        <Column sm={5} lg={8}>
                            <Image
                                defaultSrc={"../img/luna/Group 10737 - 2.png"}
                                alt="HighlightedTestimonial"
                            />
                        </Column>

                        <Column sm={5} lg={8} style={stylesheet.depoimentoColumn}>
                            <h2 style={stylesheet.text.cite}>
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            </h2>

                            <p style={stylesheet.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p style={stylesheet.text.textBr}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <p style={stylesheet.text.textBr}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                            <p style={stylesheet.text.nameTitle}>Lorem Ipsum</p>
                            <p style={stylesheet.text.jobTitle}> CTO at International Business Machines </p>
                        </Column>

                    </Row>
                </Grid>
            </div>
        </>
    )
}

export default HighligthedDepoimentoSecond;