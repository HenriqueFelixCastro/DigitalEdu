import React from "react";
import { Grid, Row, Column } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { UserSpeaker24 } from "@carbon/icons-react";

const stylesheet = {
  container: {
    background: "#161616",
    color: "#fff",
    borderBottom: "1px solid #707070",
    padding: "6vh 0",
  },
  sectionTitle: {
    display: "flex",
    label: {
      paddingLeft: "2%",
      font: "normal normal normal 18px/23px IBM Plex Sans",
    },
  },
  testimonialRow: {
    marginTop: "2vh",
  },
  testimonialColumn: {
    background: "#1F7E78 0% 0% no-repeat padding-box",
    color: "#fff",
    padding: "2%",
    highlightedPhrase: {
      font: "italic normal 300 42px/55px IBM Plex Sans",
      paddingBottom: "4vh",
    },
    paragraph: {
      padding: "1vh 0",
      font: "normal normal normal 16px/20px IBM Plex Sans",
    },
    authorName: {
      paddingTop: "2vh",
      font: "normal normal 600 16px/18px IBM Plex Sans",
      fontWeight: "bold",
    },
    authorTitle: {
      font: "normal normal 300 14px/18px IBM Plex Sans",
    },
  },
};

const HighlightedTestimonial = () => (
  <div style={stylesheet.container}>
    <Grid condensed>
      <Row>
        <Column lg={8}>
          <div style={stylesheet.sectionTitle}>
            <UserSpeaker24 />
            <p style={stylesheet.sectionTitle.label}>Testimonial</p>
          </div>
        </Column>
      </Row>
      <Row style={stylesheet.testimonialRow}>
        <Column lg={8}>
          <Image
            defaultSrc={`${process.env.PUBLIC_URL}/img/health-student.png`}
            alt="HighlightedTestimonial"
          />
        </Column>
        <Column lg={8} style={stylesheet.testimonialColumn}>
          <h2 style={stylesheet.testimonialColumn.highlightedPhrase}>
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat."
          </h2>
          <p style={stylesheet.testimonialColumn.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p style={stylesheet.testimonialColumn.paragraph}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={stylesheet.testimonialColumn.paragraph}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p style={stylesheet.testimonialColumn.authorName}>Lorem Ipsum</p>
          <p style={stylesheet.testimonialColumn.authorTitle}>
            CTO at International Business Machines
          </p>
        </Column>
      </Row>
    </Grid>
  </div>
);

export default HighlightedTestimonial;
