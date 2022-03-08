import React from "react";

import Hero from "./Hero";
import SkillsSearch from "./SkillsSearch"
import HighlightedArticle from "./HighlightedArticle";
import HighlightedTestimonial from "./HighlightedTestimonial";
import OtherArticles from "./OtherArticles";
import WorkWithUs from "./WorkWithUs";

const CommunityPage = () => (
  <>
    <Hero />
    <SkillsSearch />
    <HighlightedArticle />
    <OtherArticles />
    {/* <HighlightedTestimonial /> */}
    <WorkWithUs />
  </>
);

export default CommunityPage;
