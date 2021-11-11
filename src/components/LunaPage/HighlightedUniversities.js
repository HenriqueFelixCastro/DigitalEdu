import React, { Children } from "react";
import { Grid, Row, Column } from "carbon-components-react";

import "./LunaPage.css"
import CardProject from "./CardProject"

const stylesheet = {

    container: {
        background: "#161616",
        color: "#fff",
        padding: "5vh 0",

        elements: {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "3rem"
        }
    },

    text: {
        font: "normal normal normal 14px/18px IBM Plex Sans",
        opacity: "1",
        marginTop: "2rem",

        titleColumn: {
            font: "normal normal 600 22px/29px IBM Plex Sans",
            opacity: "1",
        },
      
        textBr: {
            font: "normal normal normal 14px/18px IBM Plex Sans",
            opacity: "1",
            marginTop: "1rem",
        }
    },

    divisor: {
        border: "2px solid #707070",
        opacity: "1",
        width: "167px",
        margin: "0rem 0rem 3rem 0rem",
    },

    rowCards: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        columnCard: {
            marginLeft: ".1rem"
        },
    },

    rowText: {
        marginBottom: "1rem"
    }
}


const HighlightedUniversities = () => {
    return(
        <>
            <div style={stylesheet.container}>

                <Grid condensed>
                    <Row style={stylesheet.container.elements}>

                        <Column sm={8} md={8} lg={4} style={stylesheet.rowText}>
                            
                            <hr style={stylesheet.divisor}></hr>
                            
                            <h2 style={stylesheet.text.titleColumn}>Universities</h2>
                            
                            <p style={stylesheet.text}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <p style={stylesheet.text.textBr} >Stay on top of the larowCards in technology and education </p>
                            </p>
                        </Column>


                        <Column sm={5} md={8} lg={11} style={stylesheet.rowCards} className="rowCards">

                            <Column sm={4} md={8} lg={5} style={stylesheet.rowCards.columnCard}>
                                <CardProject 
                                    image={"../img/highlited_card.jpg"}
                                    title={"Project 1"}
                                />
                            </Column>

                            <Column sm={4} md={8} lg={5} style={stylesheet.rowCards.columnCard}>
                                <CardProject 
                                    image={"../img/highlited_card.jpg"}
                                    title={"Project 2"}
                                />
                            </Column>

                            <Column sm={4} md={8} lg={5} style={stylesheet.rowCards.columnCard}>
                                <CardProject 
                                    image={"../img/highlited_card.jpg"}
                                    title={"Project 3"}
                                />
                            </Column>
                        </Column>
                        
                    </Row>
                </Grid>
                
            </div>
        </>
    )
}

export default HighlightedUniversities;