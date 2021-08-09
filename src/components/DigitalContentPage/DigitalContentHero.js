import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  hero: {
    padding: "3% 0",
    background: `url("${process.env.PUBLIC_URL}/img/digital-content.jpg") center center / cover no-repeat transparent`,
    color: "#FFF",
    letterSpacing: "0",
    title: {
      font: "normal normal 300 65px/85px IBM Plex Sans",
    },
  },
  subHero: {
    marginTop: "16vh",
    alignItems: "center",
    title: {
      font: "normal normal 20px/27px IBM Plex Sans",
    },
  },
};

const DigitalContentHero = () => (
  <>
    <div style={stylesheet.hero}>
      <Grid>
        <Row condensed>
          <Column sm={4} md={2} lg={7}>
            <h1 style={stylesheet.hero.title}>
              Read here a call to action about our Digital Content page.
            </h1>
          </Column>
        </Row>
        <Row condensed style={stylesheet.subHero}>
          <Column lg={4}>
            <h1 style={stylesheet.subHero.title}>Technology Topics</h1>
          </Column>
          <Column lg={9}>
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
