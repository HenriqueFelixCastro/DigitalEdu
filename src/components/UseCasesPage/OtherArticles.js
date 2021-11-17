import React, { useState } from "react";
import { Grid, Row, Column, Tag } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { Blog24, UserSpeaker24 } from "@carbon/icons-react";
import { connect } from "react-redux";

import { push } from "connected-react-router";

import { BLOG_POSTS } from "../../database/blogPosts";
import { TESTIMONIALS } from "../../database/testimonial";

const stylesheet = {
  container: {
    background: "#161616",
    color: "#fff",
    borderBottom: "1px solid #707070",
  },
  category: {
    display: "flex",
    padding: "6vh 0",
    paddingBottom: "4vh",
    label: {
      paddingLeft: "2%",
      font: "normal normal normal 18px/23px IBM Plex Sans",
    },
  },
  testimonial: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "2%",
    text: {
      font: "italic normal 300 26px/34px IBM Plex Sans",
    },
    authorName: {
      paddingTop: "2vh",
      font: "normal normal 600 16px/18px IBM Plex Sans",
    },
    authorTitle: {
      font: "normal normal 300 14px/18px IBM Plex Sans",
    },
  },
  articles: {
    articleTitle: {
      font: "normal normal 300 16px/20px IBM Plex Sans",
      fontWeight: "bold",
      padding: "3vh 0",
    },
    articleInfo: {
      font: "normal normal 300 16px/20px IBM Plex Sans",
    },
    articleTags: {
      padding: "2vh 0",
      tag: {
        marginLeft: "0",
        marginRight: "1vw",
      },
    },
  },
};

const filterNonHighlightedPost = (blogPosts) => {
  let nonHighlightedPosts = [];

  blogPosts.forEach((blogPost) => {
    if (!blogPost.isJobMarketHighlight) {
      nonHighlightedPosts.push(blogPost);
    }
  });

  return nonHighlightedPosts;
};

const filterNonHighlightedTestimonial = (testimonials) => {
  let nonHighlightedTestimonials = [];

  testimonials.forEach((testimonial) => {
    if (!testimonial.isJobMarketHighlight) {
      nonHighlightedTestimonials.push(testimonial);
    }
  });

  return nonHighlightedTestimonials;
};

const OtherArticles = ({ push }) => {
  const [nonHighlightedPosts, setNonHighlightedPosts] = useState(
    filterNonHighlightedPost(BLOG_POSTS)
  );
  const [nonHighlightedTestimonials, setNonHighlightedTestimonials] = useState(
    filterNonHighlightedTestimonial(TESTIMONIALS)
  );

  if (nonHighlightedPosts.length < 2 || nonHighlightedTestimonials.length < 1) {
    return <div></div>;
  }

  return (
    <div style={stylesheet.container}>
      <Grid>
        <Row condensed>
          <Column
            lg={8}
            style={{ borderRight: "1px solid #707070", paddingRight: "2vw" }}
          >
            <div style={stylesheet.category}>
              <UserSpeaker24 />
              <p style={stylesheet.category.label}>History</p>
            </div>
            <Row>
              <Column lg={8} style={stylesheet.testimonial}>
                <h3 style={stylesheet.testimonial.text}>
                  {nonHighlightedTestimonials[0].highlight}
                </h3>
                <p style={stylesheet.testimonial.authorName}>
                  {nonHighlightedTestimonials[0].author.name}
                </p>
                <p style={stylesheet.testimonial.authorTitle}>
                  {nonHighlightedTestimonials[0].author.title}
                </p>
              </Column>
              <Column lg={8}>
                <Image
                  defaultSrc={nonHighlightedTestimonials[0].imageURL}
                  alt="HighlightedArticle"
                />
              </Column>
            </Row>
          </Column>
          <Column
            lg={4}
            style={{ borderRight: "1px solid #707070", padding: "0 2vw" }}
            onClick={() => {
              push(
                `${process.env.PUBLIC_URL}/#use-cases/blog/${nonHighlightedPosts[0].id}`
              );
            }}
          >
            <div style={stylesheet.category}>
              <Blog24 />
              <p style={stylesheet.category.label}>Article</p>
            </div>
            <Image
              defaultSrc={nonHighlightedPosts[0].imageURL}
              alt="HighlightedArticle"
            />
            <p style={stylesheet.articles.articleTitle}>
              {nonHighlightedPosts[0].title}
            </p>
            {nonHighlightedPosts[0].authors.map((author, idx) => (
              <p style={stylesheet.articles.articleInfo} key={idx}>
                {author.name}
              </p>
            ))}
            <p style={stylesheet.articles.articleInfo}>
              {nonHighlightedPosts[0].date}
            </p>
            <div style={stylesheet.articles.articleTags}>
              {nonHighlightedPosts[0].tags.map((tag, idx) => (
                <Tag
                  style={stylesheet.articles.articleTags.tag}
                  type={tag.color}
                  key={idx}
                >
                  {tag.text}
                </Tag>
              ))}
            </div>
          </Column>
          <Column
            lg={4}
            style={{ padding: "0 2vw" }}
            onClick={() => {
              push(
                `${process.env.PUBLIC_URL}/#use-cases/blog/${nonHighlightedPosts[1].id}`
              );
            }}
          >
            <div style={stylesheet.category}>
              <Blog24 />
              <p style={stylesheet.category.label}>Article</p>
            </div>
            <Image
              defaultSrc={nonHighlightedPosts[1].imageURL}
              alt="HighlightedArticle"
            />
            <p style={stylesheet.articles.articleTitle}>
              {nonHighlightedPosts[1].title}
            </p>
            {nonHighlightedPosts[1].authors.map((author, idx) => (
              <p style={stylesheet.articles.articleInfo} key={idx}>
                {author.name}
              </p>
            ))}
            <p style={stylesheet.articles.articleInfo}>
              {nonHighlightedPosts[1].date}
            </p>
            <div style={stylesheet.articles.articleTags}>
              {nonHighlightedPosts[1].tags.map((tag, idx) => (
                <Tag
                  style={stylesheet.articles.articleTags.tag}
                  type={tag.color}
                  key={idx}
                >
                  {tag.text}
                </Tag>
              ))}
            </div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default connect(null, { push })(OtherArticles);
