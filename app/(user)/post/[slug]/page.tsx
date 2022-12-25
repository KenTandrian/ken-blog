import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const Post = ({ params: { slug } }: Props) => {
  return <div>Post: {slug}</div>;
};

export default Post;
