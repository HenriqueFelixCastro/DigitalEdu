import React from "react";

import DigitalContentBanner from "./DigitalContentBanner";
import SkillsBanner from "./SkillsBanner";
import Hero from "./Hero";
import DigitalContentAcademic from "../DigitalContentPage/DigitalContentAcademic";

const HomePage = () => (
  <>
    <Hero />
    <DigitalContentBanner />
    <SkillsBanner />
    <DigitalContentAcademic />
  </>
);

export default HomePage;
