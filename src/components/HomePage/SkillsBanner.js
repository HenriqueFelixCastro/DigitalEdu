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
      font:  "bold 30px/37px IBM Plex Sans",
    },
    paragraph: {
      padding: "4vh 0",
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
              Academia and industry face significant challenges in developing and enabling professionals ready for digital transformation.
              </h2>
              <p style={stylesheet.content.paragraph}>
              The skills gap has become the most important challenge that industry and academia must face in collaboration to develop better prepared graduates, with practical experience and knowledge of the market.
              </p>
              <CTA
                type="local"
                copy="Explore"
                href={`${process.env.PUBLIC_URL}/#skills`}
              />
            </Column>
            <Column style={{ paddingRight: "0" }}>
              <Image
                defaultSrc={`${process.env.PUBLIC_URL}/img/students-meeting.jpg`}
                alt="Skills"
              />
            </Column>
          </Row>
        </Column>
      </Row>
    </Grid>
  </div>
);

export default JobMarketBanner;
