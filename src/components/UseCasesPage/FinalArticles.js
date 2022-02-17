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
    marginBottom: "3rem"
  },
  category: {
    display: "flex",
    alignItems: "center",
    padding: "5vh 0",
    height: "20%",
    label: {
      paddingLeft: "2%",
      font: "normal normal normal 18px/23px IBM Plex Sans",
    },
  },

  articles: {
    padding: "0rem",
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",

    articleTitle: {
      font: "normal normal 300 16px/20px IBM Plex Sans",
      fontWeight: "bold",
      marginTop: "4vh",
    },

    articleInfo: {
      font: "normal normal 300 16px/20px IBM Plex Sans",
    },

    articleTags: {
      display: "flex",
      marginTop: "2vh",

      tag: {
        marginLeft: "0",
        marginRight: "1vw",
      },
    },
  },

  history: {
    background: "#265A81",
    padding: "1.5rem 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    highlightedPhrase: {
      font: "italic normal 300 25px/55px IBM Plex Sans",
      color: "#fff",
      lineHeight: "2rem",
      padding: "2%",
    },

    authorName: {
      font: "normal normal 600 16px/18px IBM Plex Sans",
      fontWeight: "bold",
      marginTop: "4vh"
    },

    authorTitle: {
      font: "normal normal 300 14px/18px IBM Plex Sans",
    }
  }
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

const FinalArticle = ({ push }) => {
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
        <Row >
            <Column lg={8} style={{paddingRight: ".8rem", borderRight: "solid #707070 1px", paddingBottom: "8vh", paddingLeft: "0"}} >
                <div style={stylesheet.category}>
                <UserSpeaker24 />
                  <p style={stylesheet.category.label}>History</p>
                </div>

                <Row condensed style={{marginBottom:"2rem", height: "85%"}}>
                    <Column lg={8} style={{display: "flex"}}>
                      <Image
                          defaultSrc={"../img/luna/Group 10662 - 2.png"}
                          alt="HighlightedTestimonial"
                      />
                    </Column>

                    <Column style={stylesheet.history} lg={8}>
                        <h2 style={stylesheet.history.highlightedPhrase}>
                          {`"${nonHighlightedPosts[0].highlight}"`}
                        </h2>

                        <div>
                          <p style={stylesheet.history.authorName}>
                            {nonHighlightedPosts[0].authors[0].name}
                          </p>

                          <p style={stylesheet.history.authorTitle}>
                            {nonHighlightedPosts[0].authors[0].title}
                          </p>
                        </div>
                    </Column>
                </Row>
            </Column>
      
            <Column lg={4} style={{paddingRight: ".8rem", borderRight: "solid #707070 1px", paddingBottom: "8vh"}}>
                <div style={stylesheet.category}>
                <Blog24 />
                <p style={stylesheet.category.label}>Article</p>
                </div>

                <Row style={{height: "85%"}}>
                    <Image
                        defaultSrc={nonHighlightedTestimonials[0].imageURL}
                        alt="HighlightedArticle"
                    />

                    <Column style={stylesheet.articles}>

                        <div style={stylesheet.articles.articleDetails}>
                          <p style={stylesheet.articles.articleTitle}>
                              {nonHighlightedPosts[0].title}
                          </p>
                          <p>
                              {nonHighlightedPosts[0].date}
                          </p>
                        </div>

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
            </Column>

            <Column lg={4} style={{paddingRight: ".8rem", paddingBottom: "8vh"}}>
                <div style={stylesheet.category}>
                <Blog24 />
                <p style={stylesheet.category.label}>Article</p>
                </div>

                <Row style={{height: "85%"}}>
                    <Image
                        defaultSrc={nonHighlightedTestimonials[0].imageURL}
                        alt="HighlightedArticle"
                    />

                    <Column style={stylesheet.articles}>
                        <div style={stylesheet.articles.articleDetails}>
                          <p style={stylesheet.articles.articleTitle}>
                              {nonHighlightedPosts[0].title}
                          </p>
                          <p>
                              {nonHighlightedPosts[0].date}
                          </p>
                        </div>

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
            </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default connect(null, { push })(FinalArticle);
