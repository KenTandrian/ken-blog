"use client";

import React from "react";
import { useLiveQuery } from "next-sanity/preview";
import { postQuery } from "@/lib/queries";
import Blog from "./Blog";
import { useParams } from "next/navigation";

type Props = {
  post: Post;
};

export default function PreviewBlog({ post }: Props) {
  const params = useParams()!;
  const [data, loading] = useLiveQuery(post, postQuery, params);
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

