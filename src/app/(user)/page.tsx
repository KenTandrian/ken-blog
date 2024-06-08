import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import PreviewProvider from "@/components/PreviewProvider";
import { getCachedClient } from "@/sanity/lib/preview";
import { postsQuery } from "@/sanity/lib/queries";
import { draftMode } from "next/headers";

export const revalidate = 30; // revaliate this page every 30 seconds

export default async function HomePage() {
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
