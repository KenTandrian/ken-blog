"use client";

import { POST_QUERY } from "@/sanity/lib/queries";
import { useLiveQuery } from "next-sanity/preview";
import { useParams } from "next/navigation";
import Blog from "./Blog";

type Props = {
  post: Post;
};

export default function PreviewBlog({ post }: Props) {
  const params = useParams()!;
  const [data, loading] = useLiveQuery(post, POST_QUERY, params);
  if (loading)
    return (
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
          Loading Preview Data...
        </p>
      </div>
    );
  return <Blog post={data} />;
};

