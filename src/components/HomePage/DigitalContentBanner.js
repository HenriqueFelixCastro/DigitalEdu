import React from "react";
import { Grid, Row, Column } from "carbon-components-react";
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
    paddingLeft: "0",
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
    <div style={stylesheet.digitalContentBanner}>
      <Grid>
        <Row>
          <Column style={stylesheet.title} lg={4}>
            <div>
              <p style={stylesheet.title.label}>Digital Content</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Column>
          <Column style={stylesheet.card}>
            <a href={`${process.env.PUBLIC_URL}/#digital-content/cloud`}>
              <CloudComputing />
              <p style={stylesheet.card.label}>Cloud Computing</p>
            </a>
          </Column>
          <Column style={stylesheet.card}>
            <a href={`${process.env.PUBLIC_URL}/#digital-content/ai`}>
              {/* eslint-disable-next-line */}
              <MachineLearning_01 />
              <p style={stylesheet.card.label}>Artificial Intelligence</p>
            </a>
          </Column>
          <Column style={stylesheet.card}>
            <a href={`${process.env.PUBLIC_URL}/#digital-content/data-science`}>
              <ChartBubble />
              <p style={stylesheet.card.label}>Data Science</p>
            </a>
          </Column>
          <Column style={stylesheet.card}>
            <a href={`${process.env.PUBLIC_URL}/#digital-content/quantum`}>
              <Devops />
              <p style={stylesheet.card.label}>Quantum Computing</p>
            </a>
          </Column>
          <Column style={stylesheet.lastCard}>
            <a href={`${process.env.PUBLIC_URL}/#digital-content/others`}>
              <Idea />
              <p style={stylesheet.card.label}>Other technologies</p>
            </a>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default DigitalContentBanner;
