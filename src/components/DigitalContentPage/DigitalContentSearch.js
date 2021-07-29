import React from "react";
import { Search, Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  search: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    color: "#FFF",
    height: "48px",
    paddingLeft: "26%",
  },
};

const pStyle = {
  font: "normal normal 600 26px/47px IBM Plex Sans",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  height: "48px",
  paddingLeft: "5%",
  paddingTop: "5%",
};

const DigitalContentSearch = () => (
  <>
    <div>
      <p style={pStyle}>Artificial Intelligence</p>
    </div>
    <div style={stylesheet.search}>
      <Grid>
        <Row>
          <Column>
            <Search style={stylesheet.search} id="search-1" />
          </Column>
        </Row>
      </Grid>
    </div>
  </>
);

export default DigitalContentSearch;
