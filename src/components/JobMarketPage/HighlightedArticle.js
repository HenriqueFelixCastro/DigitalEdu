import React from "react";
import { Grid, Row, Column, Tag } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { Blog24 } from "@carbon/icons-react";

const stylesheet = {
  container: {
    background: "#161616",
    color: "#fff",
    borderTop: "1px solid #707070",
    borderBottom: "1px solid #707070",
    padding: "6vh 0",
  },
  category: {
    display: "flex",
    label: {
      paddingLeft: "2%",
      font: "normal normal normal 18px/23px IBM Plex Sans",
    },
  },
  articleTitle: {
    padding: "4vh 0",
    font: "normal normal normal 36px/47px IBM Plex Sans",
  },
  articleInfoColumn: {
    flex: "1",
    display: "flex",
    flexDirection: "row",
  },
  articleInfo: {
    font: "normal normal 300 16px/20px IBM Plex Sans",
  },
  articleTags: {
    paddingTop: "2vh",
    tag: {
      marginLeft: "0",
      marginRight: "1vw",
    },
  },
};

const HighlightedArticle = () => (
  <div style={stylesheet.container}>
    <Grid condensed>
      <Row>
        <Column lg={8} style={{ display: "flex", flexDirection: "column" }}>
          <div style={stylesheet.category}>
            <Blog24 />
            <p style={stylesheet.category.label}>Article</p>
          </div>
          <h2 style={stylesheet.articleTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h2>
          <div style={stylesheet.articleInfoColumn}>
            <div style={{ alignSelf: "flex-end" }}>
              <p style={stylesheet.articleInfo}>
                Lorem Ipsum Amet, Consectetur Adipiscing, and Magna Aliqua
              </p>
              <p style={stylesheet.articleInfo}>28 Jun 2021</p>
              <div style={stylesheet.articleTags}>
                <Tag style={stylesheet.articleTags.tag} type="green">
                  Hard Skills
                </Tag>
                <Tag style={stylesheet.articleTags.tag} type="cyan">
                  Trend
                </Tag>
              </div>
            </div>
          </div>
        </Column>
        <Column lg={8}>
          <Image
            defaultSrc={`${process.env.PUBLIC_URL}/img/highlited_card.jpg`}
            alt="HighlightedArticle"
          />
        </Column>
      </Row>
    </Grid>
  </div>
);

export default HighlightedArticle;
