import React from "react";
import { Grid, Row, Column } from "carbon-components-react";
import { CTA, Image } from "@carbon/ibmdotcom-react";

const stylesheet = {
  workWithUsBanner: {
    padding: "10vh 0",
    background: `url("${process.env.PUBLIC_URL}/img/wwu-background.jpg") center center / cover no-repeat transparent`,
    backgroundSize: "cover",
  },
  workWithUsText: {
    background: "#161616 0% 0% no-repeat padding-box",
    color: "#fff",
    padding: "6%",
    minHeight: "100%",
    title: {
      font: "normal normal 600 26px/34px IBM Plex Sans",
    },
    content: {
      font: "normal normal 300 16px/20px IBM Plex Sans",
      padding: "4vh 0",
    },
  },
};

const WorkWithUs = () => (
  <div style={stylesheet.workWithUsBanner}>
    <Grid condensed>
      <Row id="work-with-us">
        <Column>
          <div style={stylesheet.workWithUsText}>
            <h1 style={stylesheet.workWithUsText.title}>Work with us!</h1>
            <p style={stylesheet.workWithUsText.content}>
            Deciding to start your career at IBM is an investment in your future. Whether you’re an undergraduate, graduate, or post-graduate, we’ll help you turn your years of study into tangible achievements through a vast array of global career opportunities and development programs.
            </p>
            <CTA
              type="local"
              copy="See all careers"
              href="https://www.ibm.com/c"
            />
          </div>
        </Column>
        <Column>
          <Image
            defaultSrc={`${process.env.PUBLIC_URL}/img/wwu-image.jpg`}
            alt="Work With Us"
          />
        </Column>
      </Row>
    </Grid>
  </div>
);

export default WorkWithUs;
