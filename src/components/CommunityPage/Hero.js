import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  hero: {
    padding: "3% 0",
    background: `url("${process.env.PUBLIC_URL}/img/job-market-hero.jpg") center center / cover no-repeat transparent`,
    color: "#FFF",
    letterSpacing: "0",
    title: {
      font: "normal normal 300 65px/85px IBM Plex Sans",
    },
  },
};

const Hero = () => (
  <>
    <div style={stylesheet.hero}>
      <Grid>
        <Row condensed>
          <Column sm={4} md={2} lg={7}>
            <h1 style={stylesheet.hero.title}>
              Let's create in <strong>Community</strong>{" "} the next big idea.
            </h1>
          </Column>
        </Row>
      </Grid>
    </div>
  </>
);

export default Hero;
