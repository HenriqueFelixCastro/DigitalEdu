import React from "react";
import { Search, Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  search: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    color: "#FFF",
    height: "48px",
  },
};

const DigitalContentSearch = () => (
  <div style={stylesheet.search}>
    <Grid>
      <Row>
        <Column>
          <Search
            style={stylesheet.search}
            id="search-1"
            placeHolderText="Search"
          />
        </Column>
      </Row>
    </Grid>
  </div>
);

export default DigitalContentSearch;
