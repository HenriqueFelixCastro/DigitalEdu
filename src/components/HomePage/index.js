import React from "react";
import { Grid } from "carbon-components-react";

import DigitalContentBanner from "./DigitalContentBanner";
import JobMarketBanner from "./JobMarketBanner";
import Hero from "./Hero";

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
    </Grid>
  </>
);

export default HomePage;
