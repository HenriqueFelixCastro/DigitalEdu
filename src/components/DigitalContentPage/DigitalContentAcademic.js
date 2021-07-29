import React from "react";
import { Tile, Link, Grid, Row, Column } from "carbon-components-react";
import { ArrowRight16 } from "@carbon/icons-react";

const stylesheet = {
  academicTitle: {
    fontWeight: "bold",
    paddingLeft: "2%",
    paddingTop: "2%",
    font: "normal normal normal 32px / 42px IBM Plex Sans",
    color: "#FFFFFF",
    flexDirection: "row",
  },
  academicP: {
    paddingTop: "2%",
    paddingRight: "45%",
    top: "4796px",
    font: "normal normal medium 16px/20px IBM Plex Sans",
    color: "#FFFFFF",
    marginleft: "auto",
    marginright: "auto",
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
        marginRight: "1%",
        marginLeft: "2%",
      },
    },
  },
  rowStyle: {
    padding: "10% 0",
    background: `url("/img/academicinitiative.png") center center / cover no-repeat transparent`,
    backgroundSize: "cover",
    maxWidth: "100%",
    height: "96vh",
  },
  columnStyle: {
    // paddingLeft: "15%",
  },
  columnStyle2: { paddingLeft: "15%" },
  tileStyle: {
    background: "#000000 0% 0% no-repeat padding-box",
    width: "760px",
    height: "442px",
  },
  tileStyle2: {
    background: `url("/img/academicinitiativewoman.png") center center / cover no-repeat transparent`,
    width: "730px",
    height: "442px",
  },
};

const DigitalContentAcademic = () => (
  <Row style={stylesheet.rowStyle}>
    <Column style={stylesheet.columnStyle} lg={{ span: 4, offset: 1 }}>
      <Tile style={stylesheet.tileStyle}>
        <h1 style={stylesheet.academicTitle}>IBM Academic Initiative</h1>
        <p style={stylesheet.academicP}>
          You can now close this browser tab You can now close this browser tab
          and go back to your application and go back to your application. .
        </p>
        <Link
          style={stylesheet.subHero.link}
          href="https://www.ibm.com/academic"
          target="_blank"
        >
          <ArrowRight16 style={stylesheet.subHero.link.icon} />
          Explore free technology
        </Link>
      </Tile>
    </Column>
    <Column style={stylesheet.columnStyle2}>
      <Tile style={stylesheet.tileStyle2}></Tile>
    </Column>
  </Row>
);

export default DigitalContentAcademic;
