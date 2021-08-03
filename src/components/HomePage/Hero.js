import React from "react";
import { Grid, Row, Column } from "carbon-components-react";
import { XAxis24 } from "@carbon/icons-react";
import { HashLink } from "react-router-hash-link";

const stylesheet = {
  hero: {
    padding: "3% 0",
    background: `url("${process.env.PUBLIC_URL}/img/hero home.png") center center / cover no-repeat transparent`,
    color: "#FFF",
    letterSpacing: "0",
    title: {
      font: "normal normal 300 64px/84px IBM Plex Sans",
    },
    subtitle: {
      paddingTop: "6vh",
      font: "normal normal 300 21px/28px IBM Plex Sans",
    },
    navMenu: {
      paddingTop: "6vh",
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
    backgroundColor: "#11100E 0% 0% no-repeat padding-box",
    marginTop: "6vh",
    minHeight: "180px",
    alignItems: "center",
    title: {
      font: "normal normal 20px/27px IBM Plex Sans",
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
              Boost your digital learning experience with us.
            </h1>
            <h2 style={stylesheet.hero.subtitle}>
              Prepare your class with digital content, read about the job
              market, explore business cases and much more.
            </h2>
          </Column>
        </Row>
        <Row condensed style={stylesheet.hero.navMenu}>
          <Column sm={4} md={2} lg={7}>
            <Row>
              <Column lg={5} style={stylesheet.hero.navMenu.button}>
                <XAxis24 />
                <HashLink smooth to="/#about-us">
                  <p style={stylesheet.hero.navMenu.button.text}>About Us</p>
                </HashLink>
              </Column>
              <Column style={stylesheet.hero.navMenu.button}>
                <XAxis24 />
                <HashLink smooth to="/#academic-initiative">
                  <p style={stylesheet.hero.navMenu.button.text}>
                    IBM Academic Initiative
                  </p>
                </HashLink>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row condensed style={stylesheet.subHero} id="about-us">
          <Column lg={4}>
            <h1 style={stylesheet.subHero.title}>
              IBM <strong>Global University Programs</strong>
            </h1>
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

export default Hero;
