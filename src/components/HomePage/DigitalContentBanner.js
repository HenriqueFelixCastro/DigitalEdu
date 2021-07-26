import React from "react";
import { Row, Column } from "carbon-components-react";
import {
  CloudComputing,
  MachineLearning_01,
  ChartBubble,
  Devops,
  Idea,
} from "@carbon/pictograms-react";

const stylesheet = {
  digitalContentBanner: {
    background: "#000000 0% 0% no-repeat padding-box",
    border: "1px solid #707070",
    opacity: "0.87",
    color: "#FFFFFF",
  },
  title: {
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingRight: "2%",
    label: {
      font: "bold 20px/27px IBM Plex Sans",
      paddingBottom: "2rem",
    },
  },
  card: {
    paddingTop: "40px",
    paddingBottom: "40px",
    borderLeft: "1px solid #707070",
    label: {
      font: "normal normal 600 12px/15px IBM Plex Sans",
      paddingTop: "176px",
    },
  },
  lastCard: {
    paddingTop: "40px",
    paddingBottom: "40px",
    borderLeft: "1px solid #707070",
    borderRight: "1px solid #707070",
  },
};

const DigitalContentBanner = () => {
  return (
    <Row style={stylesheet.digitalContentBanner}>
      <Column style={stylesheet.title} lg={{ span: 4, offset: 1 }}>
        <div>
          <p style={stylesheet.title.label}>Digital Content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Column>
      <Column style={stylesheet.card}>
        <CloudComputing />
        <p style={stylesheet.card.label}>Cloud Computing</p>
      </Column>
      <Column style={stylesheet.card}>
        <MachineLearning_01 />
        <p style={stylesheet.card.label}>Artificial Intelligence</p>
      </Column>
      <Column style={stylesheet.card}>
        <ChartBubble />
        <p style={stylesheet.card.label}>Data Science</p>
      </Column>
      <Column style={stylesheet.card}>
        <Devops />
        <p style={stylesheet.card.label}>Quantum Computing</p>
      </Column>
      <Column style={stylesheet.lastCard}>
        <Idea />
        <p style={stylesheet.card.label}>Other technologies</p>
      </Column>
      <Column lg={1}>{/* Empty for adding margin in the right */}</Column>
    </Row>
  );
};

export default DigitalContentBanner;
