import React from "react";
import { Grid, Row, Column } from "carbon-components-react";
import { CTA, Image } from "@carbon/ibmdotcom-react";

const stylesheet = {
  jobMarketBanner: {
    background: "#161616 0% 0% no-repeat padding-box",
    color: "#FFFFFF",
    paddingBottom: "40px",
  },
  title: {
    paddingTop: "40px",
    label: {
      font: "bold 20px/27px IBM Plex Sans",
      borderTop: "2px solid #707070",
      paddingTop: "30px",
      paddingBottom: "2rem",
      marginRight: "10vw",
    },
  },
  content: {
    paddingTop: "40px",
    paddingRight: "0",
    paddingLeft: "0",
    header: {
      font: "normal normal 300 56px/72px IBM Plex Sans",
    },
    paragraph: {
      padding: "2vh 0",
      font: "normal normal 300 14px/18px IBM Plex Sans",
    },
  },
};

const JobMarketBanner = () => (
  <div style={stylesheet.jobMarketBanner}>
    <Grid>
      <Row condensed>
        <Column style={stylesheet.title} lg={4}>
          <div>
            <p style={stylesheet.title.label}>Skills</p>
          </div>
        </Column>
        <Column style={stylesheet.content} lg={12}>
          <Row narrow>
            <Column lg={6}>
              <h2 style={stylesheet.content.header}>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h2>
              <p style={stylesheet.content.paragraph}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Stay on top of
                the latest in technology and education
              </p>
              <CTA
                type="local"
                copy="Explore"
                href={`${process.env.PUBLIC_URL}/#job-market`}
              />
            </Column>
            <Column style={{ paddingRight: "0" }}>
              <Image
                defaultSrc={`${process.env.PUBLIC_URL}/img/students-meeting.jpg`}
                alt="Job Market"
              />
            </Column>
          </Row>
        </Column>
      </Row>
    </Grid>
  </div>
);

export default JobMarketBanner;
