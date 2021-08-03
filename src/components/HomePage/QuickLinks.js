import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  quickLinks: {
    backgroundImage: "linear-gradient(to right, #2E2E2E 50% , #000203 50%)",
    titleLeft: {
      font: "18px IBM Plex Sans",
      color: "#4B8DCE",
      paddingBottom: "2%",
    },
    contentLeft: {
      color: "#FFF",
      paddingRight: "4vw",
    },
    titleCenter: {
      font: "18px IBM Plex Sans",
      color: "#4B8DCE",
      paddingBottom: "2%",
      paddingLeft: "4vw",
    },
    contentCenter: {
      color: "#FFF",
      paddingRight: "4vw",
      paddingLeft: "4vw",
    },
    contentRight: {
      color: "#FFF",
      paddingLeft: "4vw",
    },
  },
  quickLink1: {
    background: "#2E2E2E 0% 0% no-repeat padding-box",
    paddingTop: "12vh",
    paddingBottom: "12vh",
  },
  quickLink2: {
    background: "#131316 0% 0% no-repeat padding-box",
    paddingTop: "12vh",
    paddingBottom: "12vh",
  },
  quickLink3: {
    background: "#000203 0% 0% no-repeat padding-box",
    paddingTop: "12vh",
    paddingBottom: "12vh",
  },
};

const QuickLinks = () => (
  <div style={stylesheet.quickLinks}>
    <Grid>
      <Row condensed>
        <Column style={stylesheet.quickLink1} lg={5}>
          <div>
            <a
              href="https://www.research.ibm.com/university/"
              target="_blank"
              rel="noreferrer"
            >
              <p style={stylesheet.quickLinks.titleLeft}>
                IBM Global University Programs
              </p>
              <p style={stylesheet.quickLinks.contentLeft}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </a>
          </div>
        </Column>
        <Column style={stylesheet.quickLink2} lg={6}>
          <div>
            <a
              href="https://skills-academy.comprehend.ibm.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p style={stylesheet.quickLinks.titleCenter}>
                IBM Skills Academy
              </p>
              <p style={stylesheet.quickLinks.contentCenter}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </a>
          </div>
        </Column>
        <Column style={stylesheet.quickLink3} lg={5}>
          <div>
            <a
              href="https://www.research.ibm.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p style={stylesheet.quickLinks.titleCenter}>IBM Research</p>
              <p style={stylesheet.quickLinks.contentRight}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </a>
          </div>
        </Column>
      </Row>
    </Grid>
  </div>
);

export default QuickLinks;
