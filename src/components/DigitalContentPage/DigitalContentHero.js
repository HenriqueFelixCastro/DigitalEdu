import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  hero: {
    padding: "5% 0",
    background: `url("${process.env.PUBLIC_URL}/img/digital content.png") center center / cover no-repeat transparent`,
    color: "#FFFFFF",
    letterSpacing: "0",
    title: {
      font: "normal normal 300 64px/84px IBM Plex Sans",
      copyright: {
        fontSize: "32px",
        verticalAlign: "top",
      },
    },
  },
  subHero: {
    paddingTop: "4%",
    paddingBottom: "4%",
    minHeight: "250px",
    backgroundColor: "#000000",
    color: "#FFF",
    title: {
      color: "#FFF",
      font: "normal normal normal 16px/20px IBM Plex Sans",
    },
    link: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      paddingTop: "4%",
      icon: {
        marginRight: "4%",
      },
    },
  },
};

const DigitalContentHero = () => (
  <>
    <div style={stylesheet.hero}>
      <Grid>
        <Row narrow>
          <Column sm={4} md={2} lg={7}>
            <h2 style={stylesheet.hero.title}>
              Read here a call to action about our{" "}
              <strong> Digital Content </strong> page.
            </h2>
          </Column>
        </Row>
      </Grid>
    </div>

    <div style={stylesheet.subHero}>
      <Grid>
        <Row>
          <Column lg={4}>
            <h1 style={stylesheet.subHero.title}>
              <strong>Technology Topics</strong>
            </h1>
          </Column>
          <Column lg={{ span: 9, offset: 1 }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Column>
        </Row>
      </Grid>
    </div>
  </>
);

export default DigitalContentHero;
