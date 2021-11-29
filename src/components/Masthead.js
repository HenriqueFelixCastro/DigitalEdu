import React from "react";
import { Masthead } from "@carbon/ibmdotcom-react";

const mastheadLinks = [
  {
    title: "Topics",
    url: `${process.env.PUBLIC_URL}/#digital-content/ai`,
    hasMenu: true,
    hasMegapanel: false,
    menuSections: [
      {
        menuItems: [
          {
            title: "Cloud Computing",
            url: `${process.env.PUBLIC_URL}/#digital-content/cloud`,
          },
          {
            title: "Artificial Intelligence",
            url: `${process.env.PUBLIC_URL}/#digital-content/ai`,
          },
          {
            title: "Data Science",
            url: `${process.env.PUBLIC_URL}/#digital-content/data-science`,
          },
          {
            title: "Quantum Computing",
            url: `${process.env.PUBLIC_URL}/#digital-content/quantum`,
          },
          {
            title: "Other",
            url: `${process.env.PUBLIC_URL}/#digital-content/others`,
          },
        ],
      },
    ],
  },
  {
    title: "Skills",
    url: `${process.env.PUBLIC_URL}/#job-market`,
    hasMenu: false,
    hasMegapanel: false,
    menuSections: [],
  },

  {
    title: 'Use Cases',
    url: `${process.env.PUBLIC_URL}/#use-cases`,
    hasMenu: false,
    hasMegapanel: false,
    menuSections: [],
  },

  {
    title: 'Luna.',
    url: `${process.env.PUBLIC_URL}/#luna`,
    hasMenu: false,
    hasMegapanel: false,
    menuSections: [],
  }
];

const mastheadProps = {
  navigation: "default",
  platform: {
    name: "Home",
    url: `${process.env.PUBLIC_URL}`,
  },
  hasProfile: true,
  searchProps: {
    hasSearch: true,
    searchOpenOnload: false,
  },
  mastheadL1Data: {
    navigationL1: mastheadLinks,
  },
};

const AppMasthead = () => {
  return <Masthead {...mastheadProps} />;
};

export default AppMasthead;
