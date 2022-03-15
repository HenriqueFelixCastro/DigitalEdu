import React, {useState} from "react";

import { Row, Column, Search, Tag } from "carbon-components-react";

import HighlightedArticle from "./HighlightedArticle";
import OtherArticles from "./OtherArticles";

import { BLOG_POSTS } from "../../database/blogPosts";
import { TAGS } from '../../database/tags'

const stylesheet = {
  container: {
    backgroundColor: "#161616",
    color: "#fff",
  },
  tabsDiv: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    label: {
      paddingRight: "2%",
    },
    tabs: {
      marginRight: "2%",
    },
  },
};

const CommunitySearch = () => {

  const [filteredData, setFilteredData] = useState(BLOG_POSTS);

    const handleFilter = (event) => {
        const searchWord = event.target.value;

        if(searchWord){
          const filtered = filteredData.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase()) ? value : false;
          })
          setFilteredData(filtered)
        }else{
          setFilteredData(BLOG_POSTS)
        }
    }

  return(
    <>
      <Row>
        <Column lg={8}>
          <Search
            size={"xl"}
            placeholder={"Search topics, titles, tags and authors"}
            className="search-input"
            onChange={handleFilter}
          />    
        </Column>
        <Column lg={8}>
          <div style={stylesheet.tabsDiv}>
            <p style={stylesheet.tabsDiv.label}>Tags:</p>

            {TAGS.map(tag => (
                <Tag style={stylesheet.tabsDiv.tabs} type={tag.color}>{tag.text}</Tag>
            ))}

          </div>
        </Column>
      </Row>
              
      <Row>
        {filteredData.map(post => (
          post.isJobMarketHighlight ? <HighlightedArticle dataFiltered={filteredData} /> : null 
        ))}

        <OtherArticles dataFiltered={filteredData} />
      </Row>
    </>
  )
};

export default CommunitySearch;