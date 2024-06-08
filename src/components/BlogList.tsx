import Link from "next/link";

import BlogItem from "./BlogItem";

function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <BlogItem post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
