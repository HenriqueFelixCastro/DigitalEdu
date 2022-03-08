import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

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
    margin: "2rem 0",

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

  rowText: {
    marginBottom: "1rem"
  },

  buttonRegisterLuna: {
    width: "95px",
    height: "30px",
    background: "#3a7765",
    borderRadius: "30px",
  },

  link:{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}

const HighlightedUniversities = () => {
    return(
        <>
        <div style={stylesheet.container}>
          <Grid condensed>
            <Row style={stylesheet.container.elements}>
              <Column sm={8} md={16} lg={4} style={stylesheet.rowText}>
                  <hr style={stylesheet.divisor}></hr>
                  <h2 style={stylesheet.text.titleColumn}>Collaboration</h2>
                  <p style={stylesheet.text}> LUNA works divided in squads in which we defined different objectives as our first engagement, each squad has a leadership and members that work on different projects according with our objectives.</p>
                        
                  <button style={stylesheet.buttonRegisterLuna}>
                      <a href="http://ibm.biz/lunaregistration" target="_blanket" style={stylesheet.link}>Join LUNA</a>
                  </button>
              </Column>

              <Column md={16} lg={10}>
                <Row narrow style={stylesheet.columnCards}>
                    <Column lg={5}>
                      <CardProject 
                          image={"../img/luna/Group 10664 - 2.png"}
                          title={"Technology"}
                          text={"Learn how to use IBM tools and software and create problem-solving challenges for students using technology."}
                      />
                    </Column>

                    <Column lg={5}>
                      <CardProject 
                          image={"../img/luna/Group 10733 - 2.png"}
                          title={"Healthcare"}
                          text={"Learn and teach how to apply technology in healthcare and leverage"}
                      />
                    </Column>

                    <Column lg={5}>
                      <CardProject 
                          image={"../img/luna/Group 10734 - 2.png"}
                          title={"Business"}
                          text={"Learn and teach how to implement technology to handle and understand digital transformation in a business perspective through real cases."}
                      />
                    </Column>
                </Row>
              </Column>          
            </Row>
          </Grid>  
        </div>
        </>
    )
}

export default HighlightedUniversities;