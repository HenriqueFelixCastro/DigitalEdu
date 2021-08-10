import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

import LateralMenu from "./LateralMenu";
import ArticleView from "./ArticleView";
import RelatedContent from "./RelatedContent";

const ContentViewPage = () => (
  <>
    <Grid condensed>
      <Row>
        <Column lg={4}>
          <LateralMenu />
        </Column>
        <Column lg={12}>
          <ArticleView />
        </Column>
      </Row>
      <RelatedContent />
    </Grid>
  </>
);

export default ContentViewPage;
