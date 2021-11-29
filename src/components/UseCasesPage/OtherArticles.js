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
    padding: "1rem 0px",

    articleDetails:{
      marginTop: "15vh"
    },

    articleTitle: {
      font: "normal normal 300 16px/20px IBM Plex Sans",
      fontWeight: "bold",
    },

    articleInfo: {
      font: "normal normal 300 16px/20px IBM Plex Sans",
    },
    articleTags: {
      padding: "2vh 0",
      display: "flex",

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

  console.log(nonHighlightedPosts);

  return (
    <div style={stylesheet.container}>
      <Grid>
        <Row>
            <Column lg={4} style={{paddingRight: ".8rem", borderRight: "solid #707070 1px", paddingLeft: "0"}} >
                <div style={stylesheet.category}>
                <Blog24 />
                  <p style={stylesheet.category.label}>Industry Cases</p>
                </div>

                <Row>
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
      
            <Column lg={4} style={{paddingRight: ".8rem", borderRight: "solid #707070 1px"}}>
                <div style={stylesheet.category}>
                <Blog24 />
                <p style={stylesheet.category.label}>Article</p>
                </div>

                <Row>
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

            <Column lg={4} style={{paddingRight: ".8rem", borderRight: "solid #707070 1px"}}>
                <div style={stylesheet.category}>
                <Blog24 />
                <p style={stylesheet.category.label}>Article</p>
                </div>

                <Row>
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

            <Column lg={4}>
                <div style={stylesheet.category}>
                <Blog24 />
                <p style={stylesheet.category.label}>Industry Cases</p>
                </div>

                <Row>
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

export default connect(null, { push })(OtherArticles);
