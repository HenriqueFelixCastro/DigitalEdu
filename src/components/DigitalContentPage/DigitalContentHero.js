import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  hero: {
    padding: "3% 0",
    background: `url("${process.env.PUBLIC_URL}/img/digital-content.jpg") center center / cover no-repeat transparent`,
    color: "#FFF",
    letterSpacing: "0",
    title: {
      font: "normal normal 300 55px/85px IBM Plex Sans",
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
              Learn and practice technology by leveraging IBM resources.
            </h1>
          </Column>
        </Row>
        <Row condensed style={stylesheet.subHero}>
          <Column lg={4}>
            <h1 style={stylesheet.subHero.title}>Topics</h1>
          </Column>
          <Column lg={9}>
            <p>
              IBM DigitalEdu offers access to videos and tutorials of the most
              relevant technologies in the market so that students obtain the most
              important skills that the industry demands.
            </p>
          </Column>
        </Row>
      </Grid>
    </div>
  </>
);

export default DigitalContentHero;
