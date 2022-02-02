import React from "react";
import { Grid, Row, Column } from "carbon-components-react";
import { CTA, Image } from "@carbon/ibmdotcom-react";

const stylesheet = {
  academicInitiativeBanner: {
    padding: "10vh 0",
    background: `url("${process.env.PUBLIC_URL}/img/academicinitiative.jpg") center center / cover no-repeat transparent`,
    backgroundSize: "cover",
  },
  academicInitiativeText: {
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

const DigitalContentAcademic = () => (
  <div style={stylesheet.academicInitiativeBanner}>
    <Grid condensed>
      <Row id="academic-initiative">
        <Column>
          <div style={stylesheet.academicInitiativeText}>
            <h1 style={stylesheet.academicInitiativeText.title}>
              IBM Academic Initiative
            </h1>
            <p style={stylesheet.academicInitiativeText.content}>
            The IBM Academic Initiative enables students to graduate with direct hands-on experience
            on technologies that will help them in their chosen career.
            <br/>
            <br/>
            Through a self-service portal we provide students and faculty at accredited academic
            institutions with access to select IBM resources at no-charge for classroom and non-commercial
            research purposes.
            </p>
            <CTA
              $inverse-link
              type="local"
              copy="Explore free technology"
              href="https://www.ibm.com/academic"
            />
          </div>
        </Column>
        <Column>
          <Image
            defaultSrc={`${process.env.PUBLIC_URL}/img/academicinitiativewoman.jpg`}
            alt="Academic Initiative"
          />
        </Column>
      </Row>
    </Grid>
  </div>
);

export default DigitalContentAcademic;
