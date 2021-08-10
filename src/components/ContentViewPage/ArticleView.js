import React from "react";
import { Row, Column, Tag } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { Blog24, User24, Rocket24, Time24 } from "@carbon/icons-react";

const stylesheet = {
  categoryRow: {
    margin: "3vh 2vw",
    borderTop: "1px solid #707070",
    padding: "2vh 0",
  },
  categoryColumn: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    label: {
      font: "normal normal normal 16px/20px IBM Plex Sans",
      paddingLeft: ".5vw",
    },
  },
  tag: {
    marginLeft: ".5vw",
  },
  imageRow: {
    margin: "3vh 2vw",
  },
  articleRow: {
    margin: "3vh 2vw",
  },
  article: {
    title: {
      font: "normal normal normal 40px/52px IBM Plex Sans",
    },
    paragraphColumn: {
      padding: "4vh 0",
      text: {
        font: "normal normal normal 18px IBM Plex Sans",
        paddingBottom: "2vh",
      },
    },
    highlighted: {
      font: "italic normal 300 32px/42px IBM Plex Sans",
      borderTop: "1px solid #707070",
      paddingTop: "4vh",
    },
  },
  authorsRow: {
    margin: "3vh 2vw",
    marginBottom: "10vh",
    iconColumn: {
      display: "flex",
      alignItems: "center",
      paddingTop: "1%",
    },
    text: {
      font: "normal normal normal 16px/20px IBM Plex Sans",
      paddingLeft: "1vw",
    },
    name: {
      font: "normal normal 600 16px/20px IBM Plex Sans",
    },
    title: {
      font: "normal normal 300 16px/20px IBM Plex Sans",
    },
  },
};

const ArticleView = () => (
  <>
    <Row style={stylesheet.categoryRow}>
      <Column lg={2}>
        <div style={stylesheet.categoryColumn}>
          <Blog24 />
          <h3 style={stylesheet.categoryColumn.label}>Article</h3>
        </div>
      </Column>
      <Column lg={10}>
        <div style={stylesheet.categoryColumn}>
          <h3 style={stylesheet.categoryColumn.label}>Tags:</h3>
          <Tag style={stylesheet.tag} type="green">
            Hard Skills
          </Tag>
          <Tag style={stylesheet.tag} type="cyan">
            Trend
          </Tag>
        </div>
      </Column>
      <Column lg={2}>
        <div style={stylesheet.categoryColumn}>
          <Rocket24 />
          <h3 style={stylesheet.categoryColumn.label}>07 Jul 2021</h3>
        </div>
      </Column>
      <Column lg={2}>
        <div style={stylesheet.categoryColumn}>
          <Time24 />
          <h3 style={stylesheet.categoryColumn.label}>5 minutes</h3>
        </div>
      </Column>
    </Row>

    <Row style={stylesheet.imageRow}>
      <Column>
        <Image
          defaultSrc={`${process.env.PUBLIC_URL}/img/highlited_card.jpg`}
          alt="HighlightedArticle"
        />
      </Column>
    </Row>

    <Row style={stylesheet.articleRow}>
      <Column lg={12}>
        <h2 style={stylesheet.article.title}>
          This is the header of an article. Here we need to create a summary
          about the content, as short as possible.
        </h2>
      </Column>
      <Column lg={12} style={stylesheet.article.paragraphColumn}>
        <p style={stylesheet.article.paragraphColumn.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p style={stylesheet.article.paragraphColumn.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p style={stylesheet.article.paragraphColumn.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Column>
      <Column lg={12}>
        <h3 style={stylesheet.article.highlighted}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </Column>
      <Column lg={12} style={stylesheet.article.paragraphColumn}>
        <p style={stylesheet.article.paragraphColumn.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p style={stylesheet.article.paragraphColumn.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Column>
    </Row>

    <Row style={stylesheet.authorsRow}>
      <Column lg={12} style={{ borderTop: "1px solid #707070" }}>
        <div style={stylesheet.authorsRow.iconColumn}>
          <User24 />
          <p style={stylesheet.authorsRow.text}>Authors</p>
        </div>
      </Column>
      <Column lg={12} style={{ paddingTop: "2vh" }}>
        <p style={stylesheet.authorsRow.name}>Lorem Ipsum</p>
        <p style={stylesheet.authorsRow.title}>
          CTO at International Business Machines
        </p>
      </Column>
      <Column lg={12} style={{ paddingTop: "2vh" }}>
        <p style={stylesheet.authorsRow.name}>Lorem Ipsum</p>
        <p style={stylesheet.authorsRow.title}>
          CTO at International Business Machines
        </p>
      </Column>
    </Row>
  </>
);

export default ArticleView;
