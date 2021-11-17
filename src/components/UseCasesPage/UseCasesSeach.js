import React from "react";
import { Grid, Row, Column, Search, Tag } from "carbon-components-react";

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
      padding: ".8rem",
    },
  },
};

const UseCasesSearch = () => (
  <div style={stylesheet.container}>
    <Grid narrow>
      <Row>
        <Column lg={8}>
          <Search
            size={"xl"}
            placeholder={"Search topics, titles, tags and authors"}
            className="job-market-search"
          />
        </Column>
        <Column lg={8}>
          <div style={stylesheet.tabsDiv}>
            <p style={stylesheet.tabsDiv.label}>Tags:</p>
            <Tag style={stylesheet.tabsDiv.tabs} type="green">
              Artificial Intelligence
            </Tag>
            <Tag style={stylesheet.tabsDiv.tabs} type="cyan">
              Design Thinking
            </Tag>
            <Tag style={stylesheet.tabsDiv.tabs} type="purple">
              Chatbot
            </Tag>
            <Tag style={stylesheet.tabsDiv.tabs}>
              Data Science
            </Tag>
          </div>
        </Column>
      </Row>
    </Grid>
  </div>
);

export default UseCasesSearch;
