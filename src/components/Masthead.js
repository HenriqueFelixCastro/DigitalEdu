import React from "react";
import { Masthead } from "@carbon/ibmdotcom-react";

const mastheadLinks = [
  {
    title: "Digital Content",
    url: `${process.env.PUBLIC_URL}/#digital-content/ai`,
    hasMenu: true,
    hasMegapanel: false,
    menuSections: [
      {
        menuItems: [
          {
            title: "Artificial Intelligence",
            url: `${process.env.PUBLIC_URL}/#digital-content/ai`,
          },
        ],
      },
    ],
  },
  {
    title: "Job Market",
    url: `${process.env.PUBLIC_URL}/#job-market`,
    hasMenu: false,
    hasMegapanel: false,
    menuSections: [],
  },
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
