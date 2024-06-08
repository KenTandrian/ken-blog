import Blog from "@/components/Blog";
import PreviewBlog from "@/components/PreviewBlog";
import PreviewProvider from "@/components/PreviewProvider";
import { cachedClient } from "@/sanity/lib/client";
import { getCachedClient } from "@/sanity/lib/preview";
import { POST_PATHS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { draftMode } from "next/headers";

type Props = {
  params: { slug: string };
};

export const revalidate = 30; // revalidate this page every 30 seconds
export async function generateStaticParams() {
  const slugs: Post[] = await cachedClient(POST_PATHS_QUERY);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const Post = async ({ params: { slug } }: Props) => {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const post = await getCachedClient(preview)<Post>(POST_QUERY, { slug });

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
