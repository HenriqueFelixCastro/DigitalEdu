import React from "react";
import { Grid, Row, Column, Search, Tag } from "carbon-components-react";

import { TAGS } from '../../database/tags'

const stylesheet = {
  container: {
    backgroundColor: "#161616",
    color: "#fff",
  },
  tabsDiv: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    label: {
      paddingRight: "2%",
    },
    tabs: {
      marginRight: "2%",
    },
  },
};

const CommunitySearch = () => (
  <div style={stylesheet.container}>
    <Grid narrow>
      <Row>
        <Column lg={8}>
          <Search
            size={"xl"}
            placeholder={"Search topics, titles, tags and authors"}
            className="search-input"
          />
        </Column>
        <Column lg={8}>
          <div style={stylesheet.tabsDiv}>
            <p style={stylesheet.tabsDiv.label}>Tags:</p>

            {TAGS.map(tag => (
                <Tag style={stylesheet.tabsDiv.tabs} type={tag.color}>{tag.text}</Tag>
            ))}

          </div>
        </Column>
      </Row>
    </Grid>
  </div>
);

export default CommunitySearch;