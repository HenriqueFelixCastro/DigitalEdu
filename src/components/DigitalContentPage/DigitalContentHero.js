import React from "react";
import { Grid, Row, Column, Link, Tile } from "carbon-components-react";
import { ArrowRight16 } from "@carbon/icons-react";

const stylesheet = {
  hero: {
    padding: "5% 0",
    background: `url("/img/HERO.png") center center / cover no-repeat transparent`,
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
              Learn about technologies lorem ipsum lorem ipsum
            </h2>
          </Column>
          <Column>
            <p>Our latest content: </p>
            <Tile></Tile>
          </Column>
          <Column>
            <p>&nbsp;</p>
            <Tile></Tile>
          </Column>
        </Row>
      </Grid>
    </div>

    <div style={stylesheet.subHero}>
      <Grid>
        <Row>
          <Column sm={4} md={2} lg={7}>
            <p style={stylesheet.subHero.title}>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum."
            </p>
            <Link
              style={stylesheet.subHero.link}
              href="https://www.ibm.com/academic"
              target="_blank"
            >
              <ArrowRight16 style={stylesheet.subHero.link.icon} />
              Go to IBM Academic Initiative website
            </Link>
          </Column>
        </Row>
      </Grid>
    </div>
  </>
);

export default DigitalContentHero;
