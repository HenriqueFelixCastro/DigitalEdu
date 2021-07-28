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
  {
    title: "Industry Cases",
    url: `${process.env.PUBLIC_URL}/#industry-cases`,
    hasMenu: false,
    hasMegapanel: false,
    menuSections: [],
  },
  {
    title: "Luna.",
    url: `${process.env.PUBLIC_URL}/#luna`,
    hasMenu: false,
    hasMegapanel: false,
    menuSections: [],
  },
];

const mastheadProps = {
  navigation: "default",
  platform: {
    name: "Global University Programs - Americas",
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
  selectedMenuItem: "any text to remove highlight selected option",
};

const AppMasthead = () => {
  return <Masthead {...mastheadProps} />;
};

export default AppMasthead;
