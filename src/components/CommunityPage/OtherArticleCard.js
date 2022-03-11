import React from "react";

import { Row, Column, Tag } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";
import { Blog24 } from "@carbon/icons-react";

import { connect } from "react-redux";
import { push } from "connected-react-router";

import {TAGS} from '../../database/tags';

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

const OtherArticleCard = ({push, dataArticle}) => {
    console.log(dataArticle)
    return(
      <Column lg={4}
        style={{padding: "1vw", borderRight: "1px solid #707070", cursor: "pointer"}}
        onClick={() => {
          push(
            `${process.env.PUBLIC_URL}/#community/blog/${dataArticle.id}`
          );
        }}
      >
        <div style={stylesheet.category}>
          <Blog24 />
          <p style={stylesheet.category.label}>Article</p>
        </div>
  
        <Row>
          <Image
            defaultSrc={dataArticle.imageURL}
            alt="HighlightedArticle"
          />
        </Row>
  
        <p style={stylesheet.articles.articleTitle}>
          {dataArticle.title}
        </p>
  
        {dataArticle.authors.map((author, idx) => (
          <p style={stylesheet.articles.articleInfo} key={idx}>
            {author.name}
          </p>
        ))}
  
        <p style={stylesheet.articles.articleInfo}>
          {dataArticle.date}
        </p>
  
        <div style={stylesheet.articles.articleTags}>
          {dataArticle.tags.map(tag => (
            TAGS.map(tagBd => tagBd.text === tag.text ? 
              <Tag style={stylesheet.tag}
                type={tagBd.color}
                key={tagBd.id}
              >
                {tagBd.text}
              </Tag> : null
              ))
          )}
        </div>
      </Column>           
    )
}

export default connect(null, { push })(OtherArticleCard);