import React from "react";
import { Row, Column, Tag } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { Blog24 } from "@carbon/icons-react";

const stylesheet = {
  row: {
    borderTop: "1px solid #707070",
  },
  columnWithBorder: {
    borderRight: "1px solid #707070",
  },
  column: {
    padding: "1%",
    label: {
      font: "normal normal normal 16px/20px IBM Plex Sans",
      paddingLeft: ".5vw",
    },
    title: {
      fontWeight: "bold",
      padding: "2vh 0",
    },
    tag: {
      marginLeft: "0",
      marginRight: ".5vw",
    },
  },
};

const RelatedContent = () => (
  <Row style={stylesheet.row}>
    <Column
      style={{ ...stylesheet.columnWithBorder, ...stylesheet.column }}
      lg={4}
    >
      <div
        style={{ display: "flex", alignItems: "center", paddingBottom: "3vh" }}
      >
        <Blog24 />
        <h3 style={stylesheet.column.label}>Article</h3>
      </div>
      <Image
        defaultSrc={`${process.env.PUBLIC_URL}/img/highlited_card.jpg`}
        alt="HighlightedArticle"
      />
      <p style={stylesheet.column.title}>Related Article 1 Title</p>
      <p>Lorem Ipsum Amet</p>
      <p>28 Jun 2021</p>
      <div style={{ marginTop: "2vh" }}>
        <Tag style={stylesheet.column.tag} type="green">
          Hard Skills
        </Tag>
        <Tag style={stylesheet.column.tag} type="cyan">
          Trend
        </Tag>
      </div>
    </Column>
    <Column
      style={{ ...stylesheet.columnWithBorder, ...stylesheet.column }}
      lg={4}
    >
      <div
        style={{ display: "flex", alignItems: "center", paddingBottom: "3vh" }}
      >
        <Blog24 />
        <h3 style={stylesheet.column.label}>Article</h3>
      </div>
      <Image
        defaultSrc={`${process.env.PUBLIC_URL}/img/highlited_card.jpg`}
        alt="HighlightedArticle"
      />
      <p style={stylesheet.column.title}>Related Article 2 Title</p>
      <p>Lorem Ipsum Amet</p>
      <p>28 Jun 2021</p>
      <div style={{ marginTop: "2vh" }}>
        <Tag style={stylesheet.column.tag} type="green">
          Hard Skills
        </Tag>
        <Tag style={stylesheet.column.tag} type="cyan">
          Trend
        </Tag>
      </div>
    </Column>
    <Column
      style={{ ...stylesheet.columnWithBorder, ...stylesheet.column }}
      lg={4}
    >
      <div
        style={{ display: "flex", alignItems: "center", paddingBottom: "3vh" }}
      >
        <Blog24 />
        <h3 style={stylesheet.column.label}>Article</h3>
      </div>
      <Image
        defaultSrc={`${process.env.PUBLIC_URL}/img/highlited_card.jpg`}
        alt="HighlightedArticle"
      />
      <p style={stylesheet.column.title}>Related Article 3 Title</p>
      <p>Lorem Ipsum Amet</p>
      <p>28 Jun 2021</p>
      <div style={{ marginTop: "2vh" }}>
        <Tag style={stylesheet.column.tag} type="green">
          Hard Skills
        </Tag>
        <Tag style={stylesheet.column.tag} type="cyan">
          Trend
        </Tag>
      </div>
    </Column>
    <Column style={stylesheet.column} lg={4}>
      <div
        style={{ display: "flex", alignItems: "center", paddingBottom: "3vh" }}
      >
        <Blog24 />
        <h3 style={stylesheet.column.label}>Article</h3>
      </div>
      <Image
        defaultSrc={`${process.env.PUBLIC_URL}/img/highlited_card.jpg`}
        alt="HighlightedArticle"
      />
      <p style={stylesheet.column.title}>Related Article 4 Title</p>
      <p>Lorem Ipsum Amet</p>
      <p>28 Jun 2021</p>
      <div style={{ marginTop: "2vh" }}>
        <Tag style={stylesheet.column.tag} type="green">
          Hard Skills
        </Tag>
        <Tag style={stylesheet.column.tag} type="cyan">
          Trend
        </Tag>
      </div>
    </Column>
  </Row>
);

export default RelatedContent;
