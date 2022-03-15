import React, { useEffect, useState } from "react";
import { Grid, Row} from "carbon-components-react";

import OtherArticleCard from "./OtherArticleCard";

const stylesheet = {
  container: {
    background: "#161616",
    color: "#fff",
    borderBottom: "1px solid #707070",
    borderTop: "1px solid #707070",
    width: "100%",
    height: "100%"
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

// const filterNonHighlightedTestimonial = (testimonials) => {
//   let nonHighlightedTestimonials = [];

//   testimonials.forEach((testimonial) => {
//     if (!testimonial.isJobMarketHighlight) {
//       nonHighlightedTestimonials.push(testimonial);
//     }
//   });

//   return nonHighlightedTestimonials;
// };

const OtherArticles = ({ push, dataFiltered}) => {
  const [nonHighlightedPosts, setNonHighlightedPosts] = useState(filterNonHighlightedPost(dataFiltered));
  // const [nonHighlightedTestimonials, setNonHighlightedTestimonials] = useState(
  //   filterNonHighlightedTestimonial(TESTIMONIALS)
  // );

  useEffect(() => {
    setNonHighlightedPosts(filterNonHighlightedPost(dataFiltered))
  }, [dataFiltered])

  if (nonHighlightedPosts.length === 0) {
    return <div></div>;
  }

  return (
    <div style={stylesheet.container}>
      <Grid>
        <Row> 
          {nonHighlightedPosts.map(article => (
            <OtherArticleCard dataArticle={article} />
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default OtherArticles;
