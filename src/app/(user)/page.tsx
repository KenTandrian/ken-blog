import type { Metadata } from "next";
import { draftMode } from "next/headers";

import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";

export const revalidate = 30; // revaliate this page every 30 seconds

export const metadata: Metadata = {
  title: "The Blog",
};

export default async function HomePage() {
  const preview = draftMode().isEnabled;
  const initial = await loadQuery<Post[]>(POSTS_QUERY, {}, {
    perspective: preview ? "previewDrafts" : "published",
  });

  return preview ? (
    <PreviewBlogList posts={initial.data} />
  ) : (
    <BlogList posts={initial.data} />
  );
};
