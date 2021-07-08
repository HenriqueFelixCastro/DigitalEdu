import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

import { TableOfContents } from "@carbon/ibmdotcom-react";

import Video from "./Video.js";

const divStyle = {
  paddingTop: "20%",
  //paddingLeft: "10%",
};

const menuItems = [
  {
    title: "Video",
    id: "8",
  },
  {
    title: "Tutorials",
    id: "7",
  },
];

const DigitalContentVideo = () => (
  <>
    <Grid>
      <Row narrow>
        <Column lg={3}>
          <div style={{ paddingRight: "60%" }}>
            <TableOfContents menuItems={menuItems}>
              <p></p>
            </TableOfContents>
          </div>
        </Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
      </Row>
    </Grid>

    <Grid>
      <Row narrow>
        <Column lg={3}></Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
      </Row>
    </Grid>

    <Grid>
      <Row narrow>
        <Column lg={3}></Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
        <Column lg={3}>
          <div style={divStyle}>
            <Video
              videoTitle={"Lecture 1 - Cloud Computing"}
              videoDescription={"You can now close this . duration"}
              videoImg={`${process.env.PUBLIC_URL}/img/RegisterPic.png`}
            />
          </div>
        </Column>
      </Row>
    </Grid>
  </>
);

export default DigitalContentVideo;
