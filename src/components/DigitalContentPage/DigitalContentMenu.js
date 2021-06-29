import React from "react";
import { Tab, Tabs, Grid, Row, Column } from "carbon-components-react";

const stylesheet = {
  menu: {
    background: "#111111 0% 0% no-repeat padding-box",
    color: "#FFF",
  },
  tab: {
    minWidth: "200px",
  },
};

const DigitalContentMenu = () => {
  return (
    <div style={stylesheet.menu}>
      <Grid>
        <Row>
          <Column>
            <Tabs>
              <Tab style={stylesheet.tab} id="cloud" label="Cloud Computing" />
              <Tab
                style={stylesheet.tab}
                id="ia"
                label="Artificial Intelligence"
              />
              <Tab
                style={stylesheet.tab}
                id="data-science"
                label="Data Science"
              />
              <Tab
                style={stylesheet.tab}
                id="quantum"
                label="Quantum Computing"
              />
            </Tabs>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default DigitalContentMenu;
