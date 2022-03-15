import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  
    container: {
      color: "#fff",
      paddingTop: "8vh",
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
          font: "normal normal medium 20px/85px IBM Plex Sans",
          fontSize: "3.5rem",
          fontWeight: "bold",
        },

        subtitle: {
          font: "normal normal 300 40px/55px IBM Plex Sans",
        },

        titleLuna: {
          font: "normal normal medium 65px/85px IBM Plex Sans"
        },
    },

    containerFirstLine: {
      minHeight: "50vh",
      height: 'auto',
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    },

    containerSecondLine: {
      minHeight: "10vh",
      height: "auto",
      display: "flex",
      paddingBottom: "8vh",
      justifyContent: "space-between",
    }

}

const HeroLuna = () => {
  return(
    <>
      <div style={stylesheet.container}>
          <Grid condensed>
                <Row style={stylesheet.containerFirstLine}>
                    <h1 style={stylesheet.text.title}>Discover Luna.{" "}</h1>
                    <h2 style={stylesheet.text.subtitle}>Latinamerica Universities <br/> Alliance.</h2>
                </Row>

                <Row style={stylesheet.containerSecondLine}>
                  <Column sm={1} md={3} lg={4}>
                      <h1 style={stylesheet.text.titleLuna}>lu<strong>na.</strong>{" "}</h1>
                  </Column>
                  <Column sm={3} md={5} lg={11}>
                    <p style={stylesheet.text}>Work and link with Latin American universities, taking advantage of IBM resources and the talent of professors to develop high-impact projects to bring new opportunities for future professionals.</p>
                  </Column>
              </Row>
          </Grid>
      </div>
    </>
  )
}

export default HeroLuna;