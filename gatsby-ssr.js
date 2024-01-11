// Boilerplate for enabling Prismic previews
// See: https://prismic.io/docs/technologies/previews-gatsby
/* eslint-disable */

import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import * as React from "react";
import { PrismicBlogPostPage } from "./src/pages/blog/{prismicBlogPost.uid}";
import linkResolver from "./src/utils/linkResolver";

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: "sheltertech",
        linkResolver,
        componentResolver: {
          blog_post: PrismicBlogPostPage,
        },
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
);

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};
