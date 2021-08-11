import React, { useState } from "react";
import { Grid, Row, Column } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { UserSpeaker24 } from "@carbon/icons-react";

import { TESTIMONIALS } from "../../database/testimonial";

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

const filterHighlightedTestimonial = (testimonials) => {
  let highlightedTestimonials = [];

  testimonials.forEach((testimonial) => {
    if (testimonial.isJobMarketHighlight) {
      highlightedTestimonials.push(testimonial);
    }
  });

  return highlightedTestimonials;
};

const HighlightedTestimonial = () => {
  const [highlightedTestimonial, setHighlightedTestimonial] = useState(
    filterHighlightedTestimonial(TESTIMONIALS)
  );

  if (highlightedTestimonial.length <= 0) {
    return (
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
            <h2>Highlighted Testimonial not found</h2>
          </Row>
        </Grid>
      </div>
    );
  }

  return (
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
              defaultSrc={highlightedTestimonial[0].imageURL}
              alt="HighlightedTestimonial"
            />
          </Column>
          <Column lg={8} style={stylesheet.testimonialColumn}>
            <h2 style={stylesheet.testimonialColumn.highlightedPhrase}>
              {`"${highlightedTestimonial[0].highlight}"`}
            </h2>
            {highlightedTestimonial[0].paragraphs.map((paragraph) => (
              <p style={stylesheet.testimonialColumn.paragraph}>{paragraph}</p>
            ))}
            <p style={stylesheet.testimonialColumn.authorName}>
              {highlightedTestimonial[0].author.name}
            </p>
            <p style={stylesheet.testimonialColumn.authorTitle}>
              {highlightedTestimonial[0].author.title}
            </p>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default HighlightedTestimonial;
