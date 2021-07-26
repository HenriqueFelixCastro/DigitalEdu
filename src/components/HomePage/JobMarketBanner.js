import React from "react";
import { Row, Column } from "carbon-components-react";
import { ContentBlockSimple, Image } from "@carbon/ibmdotcom-react";

const stylesheet = {
  jobMarketBanner: {
    background: "#161616 0% 0% no-repeat padding-box",
    color: "#FFFFFF",
  },
  title: {
    paddingTop: "40px",
    label: {
      font: "bold 20px/27px IBM Plex Sans",
      borderTop: "2px solid #707070",
      paddingTop: "30px",
      paddingBottom: "2rem",
      marginRight: "8vw",
    },
  },
};

const cta = {
  cta: {
    href: "/job-market",
  },
  style: "text",
  type: "local",
  copy: "Explore",
};

const JobMarketBanner = () => (
  <Row style={stylesheet.jobMarketBanner}>
    <Column style={stylesheet.title} lg={{ span: 4, offset: 1 }}>
      <div>
        <p style={stylesheet.title.label}>Job Market</p>
      </div>
    </Column>
    <Column lg={11}>
      <Row>
        <Column lg={7}>
          <ContentBlockSimple
            copy={
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Stay on top of the latest in technology and education"
            }
            heading={"Lorem ipsum dolor sit amet, consectetur adipiscing."}
            cta={cta}
          />
        </Column>
        <Column>
          <Image
            defaultSrc={`${process.env.PUBLIC_URL}/img/academictalks.png`}
            alt="Job Market"
          />
        </Column>
      </Row>
    </Column>
  </Row>
);

export default JobMarketBanner;
