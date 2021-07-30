import React from "react";
import { Grid, Row, Column, Link } from "carbon-components-react";
import { XAxis24, Subtract32 } from "@carbon/icons-react";

const stylesheet = {
  hero: {
    padding: "3% 0",
    backgroundColor: "#000",
    color: "#FFF",
    letterSpacing: "0",
    title: {
      font: "normal normal 300 64px/84px IBM Plex Sans",
      bold: {
        fontWeight: "400",
      },
    },
    navMenu: {
      paddingTop: "2%",
      button: {
        display: "flex",
        text: {
          paddingLeft: "5%",
          font: "normal normal normal 22px/29px IBM Plex Sans",
        },
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
        <Row condensed>
          <Column sm={4} md={2} lg={5}>
            <h1 style={stylesheet.hero.title}>
              We are the intersection between{" "}
              <span style={stylesheet.hero.title.bold}>IBM</span> and the{" "}
              <span style={stylesheet.hero.title.bold}>Academia</span>
            </h1>
          </Column>
        </Row>
        <Row condensed style={stylesheet.hero.navMenu}>
          <Column sm={4} md={2} lg={5}>
            <Row>
              <Column lg={5} style={stylesheet.hero.navMenu.button}>
                <XAxis24 />
                <p style={stylesheet.hero.navMenu.button.text}>About Us</p>
              </Column>
              <Column style={stylesheet.hero.navMenu.button}>
                <XAxis24 />
                <p style={stylesheet.hero.navMenu.button.text}>
                  IBM Academic Initiative
                </p>
              </Column>
            </Row>
          </Column>
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
