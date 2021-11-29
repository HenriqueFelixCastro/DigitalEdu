import React from "react";
import { Tab, Tabs, Grid, Row, Column } from "carbon-components-react";
import { digitalContentSelected } from "../../actions/ui";
import { connect } from "react-redux";
import { DIGITAL_CONTENT_AVAILABLE } from "../../actions/actionTypes";

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

const selectedTrackToTabsId = (selectedTrack) => {
  switch (selectedTrack) {
    case DIGITAL_CONTENT_AVAILABLE.ARTIFICIAL_INTELLIGENCE:
      return 1;
    case DIGITAL_CONTENT_AVAILABLE.DATA_SCIENCE:
      return 2;
    case DIGITAL_CONTENT_AVAILABLE.QUANTUM_COMPUTING:
      return 3;
    case DIGITAL_CONTENT_AVAILABLE.OTHER_TECHNOLOGIES:
      return 4;
    default:
      return 0; // Cloud Computing
  }
};

const DigitalContentMenu = (props) => {
  return (
    <div style={stylesheet.menu}>
      <Grid>
        <Row condensed>
          <Column lg={{ span: 12, offset: 4 }}>
            <Tabs selected={selectedTrackToTabsId(props.selectedTrack)}>
              <Tab
                style={stylesheet.tab}
                id="cloud"
                label="Cloud Computing"
                onClick={() =>
                  handleDigitalContentMenuClick(
                    props.digitalContentSelected,
                    DIGITAL_CONTENT_AVAILABLE.CLOUD_COMPUTING
                  )
                }
              />
              <Tab
                style={stylesheet.tab}
                id="ia"
                label="Artificial Intelligence"
                onClick={() =>
                  handleDigitalContentMenuClick(
                    props.digitalContentSelected,
                    DIGITAL_CONTENT_AVAILABLE.ARTIFICIAL_INTELLIGENCE
                  )
                }
              />
              <Tab
                style={stylesheet.tab}
                id="data-science"
                label="Data Science"
                onClick={() =>
                  handleDigitalContentMenuClick(
                    props.digitalContentSelected,
                    DIGITAL_CONTENT_AVAILABLE.DATA_SCIENCE
                  )
                }
              />
              <Tab
                style={stylesheet.tab}
                id="quantum"
                label="Quantum Computing"
                onClick={() =>
                  handleDigitalContentMenuClick(
                    props.digitalContentSelected,
                    DIGITAL_CONTENT_AVAILABLE.QUANTUM_COMPUTING
                  )
                }
              />
              <Tab
                style={stylesheet.tab}
                id="other"
                label="Other"
                onClick={() =>
                  handleDigitalContentMenuClick(
                    props.digitalContentSelected,
                    DIGITAL_CONTENT_AVAILABLE.OTHER_TECHNOLOGIES
                  )
                }
              />
            </Tabs>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedTrack: state.ui.content,
});

export default connect(mapStateToProps, { digitalContentSelected })(
  DigitalContentMenu
);
