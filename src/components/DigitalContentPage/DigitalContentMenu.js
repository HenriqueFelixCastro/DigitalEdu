import React from "react";
import { Tab, Tabs, Grid, Row, Column } from "carbon-components-react";
import { digitalContentSelected } from "../../actions/ui";
import { connect } from "react-redux";

const stylesheet = {
  menu: {
    background: "#111111 0% 0% no-repeat padding-box",
    color: "#FFF",
  },
  tab: {
    minWidth: "200px",
  },
};

const handleDigitalContentMenuClick = (digitalContentSelected, label) =>
  digitalContentSelected(label);

const DigitalContentMenu = (props) => {
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
                onClick={() =>
                  handleDigitalContentMenuClick(
                    props.digitalContentSelected,
                    "Artificial Intelligence"
                  )
                }
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

export default connect(null, { digitalContentSelected })(DigitalContentMenu);
