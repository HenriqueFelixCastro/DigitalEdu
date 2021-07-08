import React from "react";
import { Grid, Row, Column, Link } from "carbon-components-react";
import { XAxis16, Subtract32 } from "@carbon/icons-react";

const stylesheet = {
  hero: {
    padding: "5% 0",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    letterSpacing: "0",
    title: {
      font: "normal normal 300 64px/84px IBM Plex Sans",
    },
    subTitle: {
      rowStyle: {
        paddingTop: "2%",
        paddingLeft: "1%",
      },
      colummStyle: {
        paddingLeft: "3%",
      },
      pStyle: {
        paddingLeft: "2%",
      },
      pStyle2: {
        paddingRight: "75%",
      },
    },
  },
  subHero: {
    paddingTop: "4%",
    paddingBottom: "4%",
    minHeight: "250px",
    backgroundColor: "#000000",
    title: {
      color: "#FFF",
      font: "normal normal normal 16px/20px IBM Plex Sans",
    },
    colummStyle: {
      color: "#FFF",
      paddingRight: "50%",
    },
    pStyle: {
      color: "#FFF",
      font: "normal normal normal 13px/20px IBM Plex Sans",
    },
  },
};

const Hero = () => (
  <>
    <div style={stylesheet.hero}>
      <Grid>
        <Row>
          <Column sm={4} md={2} lg={7}>
            <h1 style={stylesheet.hero.title}>We are the</h1>
            <h1 style={stylesheet.hero.title}>intersection</h1>
            <h1 style={stylesheet.hero.title}>between</h1>
            <h1 style={stylesheet.hero.title}>
              <strong>IBM</strong> and the
            </h1>
            <h1 style={stylesheet.hero.title}>
              <strong>Academia.</strong>
            </h1>
          </Column>
        </Row>

        <Row style={stylesheet.hero.subTitle.rowStyle}>
          <XAxis16 />
          <p style={stylesheet.hero.subTitle.pStyle}>About Us</p>
          <Column style={stylesheet.hero.subTitle.colummStyle}>
            <XAxis16 />
          </Column>
          <p style={stylesheet.hero.subTitle.pStyle2}>
            IBM Academic Initiative
          </p>
        </Row>
      </Grid>
    </div>
    <div style={stylesheet.subHero}>
      <Grid>
        <Row>
          <Column>
            <h1 style={stylesheet.subHero.title}>
              IBM <strong>Global University Programs</strong>
            </h1>
            <Subtract32 />
          </Column>
          <Column style={stylesheet.subHero.colummStyle}>
            <p style={stylesheet.subHero.pStyle}>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <p style={stylesheet.subHero.colummStyle}>Latin America</p>
          </Column>
        </Row>
      </Grid>
    </div>
  </>
);

export default Hero;
