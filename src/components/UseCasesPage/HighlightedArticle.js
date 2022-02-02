import React, { useState } from "react";
import { Grid, Row, Column, Tag } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { Blog24 } from "@carbon/icons-react";
import { connect } from "react-redux";

import { push } from "connected-react-router";

import { BLOG_POSTS } from "../../database/blogPosts";

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
    cursor: "pointer"
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

const filterHighlightedPost = (blogPosts) => {
  let highlightedPosts = [];

  blogPosts.forEach((blogPost) => {
    if (blogPost.isJobMarketHighlight) {
      highlightedPosts.push(blogPost);
    }
  });

  return highlightedPosts;
};

const HighlightedArticle = ({ push }) => {
  const [highlightedPost, setHighlightedPost] = useState(
    filterHighlightedPost(BLOG_POSTS)
  );

  if (highlightedPost.length <= 0) {
    return (
      <div style={stylesheet.container}>
        <Grid condensed>
          <Row>
            <Column lg={8} style={{ display: "flex", flexDirection: "column" }}>
              <div style={stylesheet.category}>
                <Blog24 />
                <p style={stylesheet.category.label}>Industry Cases</p>
              </div>
              <h2 style={stylesheet.articleTitle}>
                Highlighted Article not found.
              </h2>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }

  return (
    <div style={stylesheet.container}>
      <Grid condensed>
        <Row>
          <Column
            lg={8}
            style={{ display: "flex", flexDirection: "column" }}
            onClick={() => {
              push(
                `${process.env.PUBLIC_URL}/#use-cases/blog/${highlightedPost[0].id}`
              );
            }}
          >
            <div style={stylesheet.category}>
              <Blog24 />
              <p style={stylesheet.category.label}>Industry Cases</p>
            </div>
            <h2 style={stylesheet.articleTitle}>{highlightedPost[0].title}</h2>
            <div style={stylesheet.articleInfoColumn}>
              <div style={{ alignSelf: "flex-end" }}>
                {highlightedPost[0].authors.map((author, idx) => (
                  <p style={stylesheet.articleInfo} key={idx}>
                    {author.name}
                  </p>
                ))}
                <p style={stylesheet.articleInfo}>{highlightedPost[0].date}</p>
                <div style={stylesheet.articleTags}>
                  {highlightedPost[0].tags.map((tag, idx) => (
                    <Tag
                      style={stylesheet.articleTags.tag}
                      type={tag.color}
                      key={idx}
                    >
                      {tag.text}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </Column>
          <Column lg={8}>
            <Image
              defaultSrc={highlightedPost[0].imageURL}
              alt="HighlightedArticle"
            />
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default connect(null, { push })(HighlightedArticle);
