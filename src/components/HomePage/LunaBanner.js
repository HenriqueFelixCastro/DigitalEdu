import React from "react";
import { Row, Column } from "carbon-components-react";
import { ContentBlockSimple, Image } from "@carbon/ibmdotcom-react";

const stylesheet = {
  lunaBanner: {
    background: "#161616 0% 0% no-repeat padding-box",
    color: "#FFFFFF",
  },
  title: {
    label: {
      font: "bold 20px/27px IBM Plex Sans",
      borderTop: "2px solid #707070",
      paddingTop: "30px",
      paddingBottom: "2rem",
      marginRight: "8vw",
    },
  },
  content: {
    paddingTop: "30px",
    borderTop: "1px solid #707070",
  },
};

const cta = {
  cta: {
    href: "/luna",
  },
  style: "text",
  type: "local",
  copy: "Discover Luna",
};

const LunaBanner = () => (
  <Row style={stylesheet.lunaBanner}>
    <Column lg={{ span: 4, offset: 1 }}>
      <div>
        <p style={stylesheet.title.label}>Luna</p>
      </div>
    </Column>
    <Column lg={11} style={stylesheet.content}>
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
            defaultSrc={`${process.env.PUBLIC_URL}/img/health-student.png`}
            alt="Luna"
          />
        </Column>
        <Column lg={1}>{/* Empty for adding margin in the right */}</Column>
      </Row>
    </Column>
  </Row>
);

export default LunaBanner;
