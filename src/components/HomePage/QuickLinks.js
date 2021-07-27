import React from "react";
import { Row, Column } from "carbon-components-react";

const stylesheet = {
  quickLink1: {
    background: "#2E2E2E 0% 0% no-repeat padding-box",
    padding: "6%",
    title: {
      font: "18px IBM Plex Sans",
      color: "#4B8DCE",
      paddingBottom: "2%",
    },
    content: {
      color: "#FFF",
    },
  },
  quickLink2: {
    background: "#131316 0% 0% no-repeat padding-box",
    padding: "6%",
  },
  quickLink3: {
    background: "#000203 0% 0% no-repeat padding-box",
    padding: "6%",
  },
};

const QuickLinks = () => (
  <Row>
    <Column style={stylesheet.quickLink1}>
      <div>
        <p style={stylesheet.quickLink1.title}>
          IBM Global University Programs
        </p>
        <p style={stylesheet.quickLink1.content}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </Column>
    <Column style={stylesheet.quickLink2}>
      <div>
        <p style={stylesheet.quickLink1.title}>IBM Skills Academy</p>
        <p style={stylesheet.quickLink1.content}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </Column>
    <Column style={stylesheet.quickLink3}>
      <div>
        <p style={stylesheet.quickLink1.title}>IBM Research</p>
        <p style={stylesheet.quickLink1.content}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </Column>
  </Row>
);

export default QuickLinks;
