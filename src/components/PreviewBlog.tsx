"use client";

import { useLiveQuery } from "@sanity/preview-kit";
import { useParams } from "next/navigation";
import { POST_QUERY } from "@/sanity/lib/queries";
import Blog from "./Blog";

type Props = {
  post: Post;
};

export default function PreviewBlog({ post }: Props) {
  const params = useParams()!;
  const [data, loading] = useLiveQuery(post, POST_QUERY, params);
  if (loading)
    return (
      <div>
        <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
          Loading Preview Data...
        </p>
      </div>
    );
  return <Blog post={data} />;
}
