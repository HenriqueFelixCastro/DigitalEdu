import React from "react";

import DigitalContentBanner from "./DigitalContentBanner";
import JobMarketBanner from "./JobMarketBanner";
import Hero from "./Hero";
import QuickLinks from "./QuickLinks";
import DigitalContentAcademic from "../DigitalContentPage/DigitalContentAcademic";

const HomePage = () => (
  <>
    <Hero />
    <DigitalContentBanner />
    <JobMarketBanner />
    <DigitalContentAcademic />
    <QuickLinks />
  </>
);

export default HomePage;
