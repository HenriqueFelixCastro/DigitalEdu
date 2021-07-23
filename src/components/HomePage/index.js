import React from "react";
import { Grid } from "carbon-components-react";

import DigitalContentBanner from "./DigitalContentBanner";

const stylesheet = {
  homePage: {
    padding: "0",
  },
};

const HomePage = () => (
  <Grid fullWidth style={stylesheet.homePage}>
    <DigitalContentBanner />
  </Grid>
);

export default HomePage;
