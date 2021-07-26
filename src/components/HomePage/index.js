import React from "react";
import { Grid } from "carbon-components-react";

import DigitalContentBanner from "./DigitalContentBanner";
import JobMarketBanner from "./JobMarketBanner";
import LunaBanner from "./LunaBanner";
import Hero from "./Hero";
import QuickLinks from "./QuickLinks";

const stylesheet = {
  homePage: {
    padding: "0",
  },
};

const HomePage = () => (
  <>
    <Hero />
    <Grid fullWidth style={stylesheet.homePage}>
      <DigitalContentBanner />
      <JobMarketBanner />
      <LunaBanner />
      <QuickLinks />
    </Grid>
  </>
);

export default HomePage;
