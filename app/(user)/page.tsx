import React from "react";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewProvider from "../../components/PreviewProvider";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->,
    } | order(_createdAt desc)
`;

export const revalidate = 30; // revaliate this page every 30 seconds
const HomePage = async () => {
  if (draftMode().isEnabled) {
    const preview = {
      token: process.env.SANITY_API_READ_TOKEN!
    };
    return (
      <PreviewProvider token={preview.token}>
        <PreviewBlogList query={query} />
      </PreviewProvider>
    );
  }
  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default HomePage;
