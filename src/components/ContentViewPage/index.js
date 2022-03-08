import React from "react";
import { Grid, Row, Column } from "carbon-components-react";
import { connect } from "react-redux";

import LateralMenu from "./LateralMenu";
import ArticleView from "./ArticleView";
import VideoView from "./VideoView";

const ContentViewPage = ({ pathname }) => (
  <>
    <Grid condensed>
      <Row>
        <Column lg={4}>
          <LateralMenu />
        </Column>
        <Column lg={12}>
          {pathname.search("blog") !== -1 && <ArticleView />}
          {pathname.search("watch") !== -1 && <VideoView />}
        </Column>
      </Row>
    </Grid>
  </>
);

const mapStateToProps = (state) => ({
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps, null)(ContentViewPage);
