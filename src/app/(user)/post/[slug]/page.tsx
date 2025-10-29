import type { Metadata } from "next";
import { draftMode } from "next/headers";
import type { QueryParams } from "next-sanity";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<QueryParams>;
}): Promise<Metadata> {
  const preview = (await draftMode()).isEnabled ? { token } : undefined;
  const { data } = await loadQuery<Post>(POST_QUERY, await params, {
    perspective: preview?.token ? "drafts" : "published",
  });
  return {
    title: data.title,
    description: data.description,
  };
}

const Post = async ({ params }: { params: Promise<QueryParams> }) => {
  const preview = (await draftMode()).isEnabled ? { token } : undefined;
  const initial = await loadQuery<Post>(POST_QUERY, await params, {
    perspective: preview?.token ? "drafts" : "published",
  });

  return preview?.token ? (
    <PreviewBlog post={initial.data} />
  ) : (
    <Blog post={initial.data} />
  );
};

export default Post;
