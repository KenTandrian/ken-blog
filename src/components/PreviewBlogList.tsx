"use client";

import React from "react";
import { useLiveQuery } from "next-sanity/preview";
import BlogList from "./BlogList";

type Props = {
  query: string;
};

const PreviewBlogList = ({ query }: Props) => {
  const [posts, loading] = useLiveQuery([] as Post[], query);
  if (loading)
    return (
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
          Loading Preview Data...
        </p>
      </div>
    );
  return <BlogList posts={posts} />;
};

export default PreviewBlogList;
