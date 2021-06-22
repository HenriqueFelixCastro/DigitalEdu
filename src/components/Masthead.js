import React from "react";
import { Masthead } from "@carbon/ibmdotcom-react";

const mastheadLinks = [
  {
    title: "Technologies",
    url: "/technologies/ai",
    hasMenu: true,
    hasMegapanel: false,
    menuSections: [
      {
        menuItems: [
          {
            title: "Artificial Intelligence",
            url: "/technologies/ai",
          },
        ],
      },
    ],
  },
  {
    title: "LUNA",
    url: "/luna",
    hasMenu: false,
    hasMegapanel: false,
    menuSections: [],
  },
];

const mastheadProps = {
  navigation: "default",
  platform: {
    name: "Global University Programs - Latin America",
    url: "/",
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
