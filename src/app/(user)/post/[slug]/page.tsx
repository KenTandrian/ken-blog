import React from "react";
import { getCachedClient } from "@/lib/sanity.preview";
import { postPathsQuery, postQuery } from "@/lib/queries";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";
import Blog from "@/components/Blog";
import PreviewBlog from "@/components/PreviewBlog";
import { cachedClient } from "@/lib/sanity.client";

type Props = {
  params: { slug: string };
};

export const revalidate = 30; // revalidate this page every 30 seconds
export async function generateStaticParams() {
  const slugs: Post[] = await cachedClient(postPathsQuery);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const Post = async ({ params: { slug } }: Props) => {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const post = await getCachedClient(preview)<Post>(postQuery, { slug });

  if (preview?.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewBlog post={post} />
      </PreviewProvider>
    );
  }

  return <Blog post={post} />;
};

export default Post;
