import React, { useEffect } from "react";
import { Row, Column, Tag, Loading } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { Blog24, User24, Rocket24, Time24 } from "@carbon/icons-react";
import { connect } from "react-redux";

import { blogPostSelected } from "../../actions/ui";

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

const ArticleView = ({ blogPost, pathname, blogPostSelected }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    let selectedPostId = /[^/]*$/.exec(pathname)[0]; // Gets last substring after last slash
    blogPostSelected(selectedPostId);
  }, [pathname, blogPostSelected]);

  if (blogPost && Object.keys(blogPost).length === 0) {
    return (
      <>
        <Row style={stylesheet.categoryRow}>
          <Column lg={2}>
            <div style={stylesheet.categoryColumn}>
              <Blog24 />
              <h3 style={stylesheet.categoryColumn.label}>Article</h3>
            </div>
          </Column>
        </Row>
        <Row style={stylesheet.articleRow}>
          <Loading />
        </Row>
      </>
    );
  }

  if (!blogPost) {
    return (
      <>
        <Row style={stylesheet.categoryRow}>
          <Column lg={2}>
            <div style={stylesheet.categoryColumn}>
              <Blog24 />
              <h3 style={stylesheet.categoryColumn.label}>Article</h3>
            </div>
          </Column>
        </Row>
        <Row style={stylesheet.articleRow}>Article Not Found</Row>
      </>
    );
  }

  return (
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
            {blogPost.tags.map((tag, idx) => (
              <Tag style={stylesheet.tag} type={tag.color} key={idx}>
                {tag.text}
              </Tag>
            ))}
          </div>
        </Column>
        <Column lg={2}>
          <div style={stylesheet.categoryColumn}>
            <Rocket24 />
            <h3 style={stylesheet.categoryColumn.label}>{blogPost.date}</h3>
          </div>
        </Column>
        <Column lg={2}>
          <div style={stylesheet.categoryColumn}>
            <Time24 />
            <h3 style={stylesheet.categoryColumn.label}>{blogPost.duration}</h3>
          </div>
        </Column>
      </Row>

      <Row style={stylesheet.imageRow}>
        <Column>
          <Image defaultSrc={blogPost.imageURL} alt={blogPost.title} />
        </Column>
      </Row>

      <Row style={stylesheet.articleRow}>
        <Column lg={12}>
          <h2 style={stylesheet.article.title}>{blogPost.title}</h2>
        </Column>
        <Column lg={12} style={stylesheet.article.paragraphColumn}>
          {blogPost.paragraphsBeforeHighlight.map((paragraph, idx) => (
            <p style={stylesheet.article.paragraphColumn.text} key={idx}>
              {paragraph}
            </p>
          ))}
        </Column>
        <Column lg={12}>
          <h3 style={stylesheet.article.highlighted}>{blogPost.highlight}</h3>
        </Column>
        <Column lg={12} style={stylesheet.article.paragraphColumn}>
          {blogPost.paragraphsAfterHighlight.map((paragraph, idx) => (
            <p style={stylesheet.article.paragraphColumn.text} key={idx}>
              {paragraph}
            </p>
          ))}
        </Column>
      </Row>

      <Row style={stylesheet.authorsRow}>
        <Column lg={12} style={{ borderTop: "1px solid #707070" }}>
          <div style={stylesheet.authorsRow.iconColumn}>
            <User24 />
            <p style={stylesheet.authorsRow.text}>Authors</p>
          </div>
        </Column>
        {blogPost.authors.map((author, idx) => (
          <Column lg={12} style={{ paddingTop: "2vh" }} key={idx}>
            <p style={stylesheet.authorsRow.name}>{author.name}</p>
            <p style={stylesheet.authorsRow.title}>{author.title}</p>
          </Column>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  blogPost: state.ui.blogPost,
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps, { blogPostSelected })(ArticleView);
