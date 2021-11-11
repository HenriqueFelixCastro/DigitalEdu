import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  
    container: {
      background: "#161616",
      color: "#fff",
      padding: "8vh 0",
      background: `url("${process.env.PUBLIC_URL}/img/digital-content.jpg") center center / cover no-repeat transparent`,
      backgroundSize: "cover",
    },

    text: {
      color: 'white',
      paddingLeft: "3rem",
      font: "normal normal 300 16px/20px IBM Plex Sans",
      opacity: '1',
      textAlign: "left",

        title: {
          font: "normal normal medium 65px/85px IBM Plex Sans",
        },

        subtitle: {
          font: "normal normal 300 65px/85px IBM Plex Sans",
        },

        titleLuna: {
          font: "normal normal medium 65px/85px IBM Plex Sans"
        },
    },

    containerSecondLine: {
      marginTop: "4rem",
      display: "flex",
      justifyContent: "space-between",
    }

}


const HeroLuna = () => {
  return(
    <>
      <div style={stylesheet.container}>
          <Grid condensed>
                <Row style={stylesheet}>
                    <Column sm={3} md={4} lg={6}>
                      <h1 style={stylesheet.text.title}><strong>Discover Luna.</strong>{" "}</h1>
                      <h2 style={stylesheet.text.subtitle}>Loren ipsum dolor sit amet.</h2>
                    </Column>
                </Row>

                <Row style={stylesheet.containerSecondLine}>

                  <Column sm={1} md={3} lg={4}>
                      <h1 style={stylesheet.text.titleLuna}>lu<strong>na.</strong>{" "}</h1>
                  </Column>

                  <Column sm={3} md={5} lg={11}>
                    <p style={stylesheet.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </Column>
              
              </Row>
          </Grid>
      </div>
    </>
  )
}

export default HeroLuna;