import React from "react";
import { Tag } from "carbon-components-react";

import { TAGS } from '../../database/tags'

const stylesheet = {
  div: {
    background: "rgba(22,22,22,.1) 0% 0% no-repeat padding-box",
    borderBottom: "1px solid #707070",
    padding: "6vh 0",
  },
  homeLink: {
    font: "normal normal medium 14px/18px IBM Plex Sans",
    color: "#3A7DFE",
  },
  contentParent: {
    display: "flex",
    label: {
      paddingLeft: "2%",
    },
  },
  sectionTitle: {
    font: "normal normal medium 14px/18px IBM Plex Sans",
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: "2vh",
  },
  tagDiv: {
    display: "flex",
    flexDirection: "column",
    tag: {
      marginLeft: "0",
    },
  },
};

const LateralMenu = () => (
  <div style={{ borderRight: "1px solid #707070", height: "100%" }}>
    <div style={stylesheet.div}>
      <p style={stylesheet.sectionTitle}>Tags</p>

      {TAGS.map(tag => (
        <div key={tag.id}>
          <Tag style={stylesheet.tagDiv.tag} type={tag.color}>{tag.text}</Tag>
        </div>
      ))}

    </div>
    <div style={stylesheet.div}>
      <p style={stylesheet.sectionTitle}>Explore</p>
      <div>
        <Tag style={stylesheet.tagDiv.tag} type="magenta">Videos</Tag>
      </div>
      <div>
        <Tag style={stylesheet.tagDiv.tag} type="teal">Tutorials</Tag>
      </div>
      <div>
        <Tag style={stylesheet.tagDiv.tag} type="warm-gray">Community</Tag>
      </div>
    </div>
  </div>
);

export default LateralMenu;
