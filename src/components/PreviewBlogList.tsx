"use client";

import React from "react";
import { useLiveQuery } from "next-sanity/preview";
import BlogList from "./BlogList";
import { postsQuery } from "@/lib/queries";

type Props = {
  posts: Post[];
};

const PreviewBlogList = ({ posts = [] }: Props) => {
  const [data, loading] = useLiveQuery(posts, postsQuery);
  if (loading)
    return (
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
          Loading Preview Data...
        </p>
      </div>
    );
  return <BlogList posts={data} />;
};

export default PreviewBlogList;
