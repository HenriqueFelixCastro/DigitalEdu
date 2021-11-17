import React from "react";

import Hero from "./Hero";
import UseCasesSeach from "./UseCasesSeach";
import HighlightedArticle from "./HighlightedArticle";
import HighlightedTestimonial from "./HighlightedTestimonial";
import OtherArticles from "./OtherArticles";
import WorkWithUs from "./WorkWithUs";
import QuickLinks from "../HomePage/QuickLinks";

const UseCasesPage = () => (
  <>
    <Hero />
    <UseCasesSeach />
    <HighlightedArticle />
    <OtherArticles />
    <HighlightedTestimonial />
    <WorkWithUs />
    <QuickLinks />
  </>
);

export default UseCasesPage;
