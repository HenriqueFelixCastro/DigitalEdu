import React from "react";

import Hero from "./Hero";
import JobMarketSearch from "./JobMarketSearch";
import HighlightedArticle from "./HighlightedArticle";
import HighlightedTestimonial from "./HighlightedTestimonial";
import OtherArticles from "./OtherArticles";
import WorkWithUs from "./WorkWithUs";
import QuickLinks from "../HomePage/QuickLinks";

const JobMarketPage = () => (
  <>
    <Hero />
    <JobMarketSearch />
    <HighlightedArticle />
    <OtherArticles />
    <HighlightedTestimonial />
    <WorkWithUs />
    <QuickLinks />
  </>
);

export default JobMarketPage;
