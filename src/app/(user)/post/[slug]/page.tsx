import { QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import Blog from "@/components/Blog";
import PreviewBlog from "@/components/PreviewBlog";
import { client } from "@/sanity/lib/client";
import { POST_PATHS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import { token } from "@/sanity/lib/token";

export const revalidate = 30; // revalidate this page every 30 seconds

export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(POST_PATHS_QUERY);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

const Post = async ({ params }: { params: QueryParams }) => {
  const preview = draftMode().isEnabled ? { token } : undefined;
  const initial = await loadQuery<Post>(POST_QUERY, params, {
    perspective: (preview && preview.token) ? "previewDrafts" : "published",
  });

  return (preview?.token) ? (
    <PreviewBlog post={initial.data} />
  ) : (
    <Blog post={initial.data} />
  );
};

export default Post;
