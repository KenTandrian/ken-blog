import React from "react";
import { draftMode } from "next/headers";
import { getCachedClient } from "../../lib/sanity.preview";
import PreviewProvider from "../../components/PreviewProvider";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import { postsQuery } from "@/lib/queries";

export const revalidate = 30; // revaliate this page every 30 seconds

export default async function HomePage () {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const posts = await getCachedClient(preview)<Post[]>(postsQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewBlogList posts={posts} />
      </PreviewProvider>
    );
  }

  return <BlogList posts={posts} />;
};
