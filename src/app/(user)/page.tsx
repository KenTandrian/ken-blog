import { draftMode } from "next/headers";

import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import { postsQuery } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";

export const revalidate = 30; // revaliate this page every 30 seconds

export default async function HomePage() {
  const preview = draftMode().isEnabled;
  const initial = await loadQuery<Post[]>(postsQuery, {}, {
    perspective: preview ? "previewDrafts" : "published",
  });

  return preview ? (
    <PreviewBlogList posts={initial.data} />
  ) : (
    <BlogList posts={initial.data} />
  );
};
