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
          font: "normal normal medium 20px/85px IBM Plex Sans",
          fontSize: "3.5rem",
          fontWeight: "bold",
        },

        subtitle: {
          font: "normal normal 300 50px/65px IBM Plex Sans",
        },

        titleLuna: {
          font: "normal normal medium 65px/85px IBM Plex Sans"
        },
    },

    containerSecondLine: {
      marginTop: "15vh",
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
                      <h1 style={stylesheet.text.title}>Discover Luna.{" "}</h1>
                      <h2 style={stylesheet.text.subtitle}>Latinamerica Universities Alliance.</h2>
                    </Column>
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