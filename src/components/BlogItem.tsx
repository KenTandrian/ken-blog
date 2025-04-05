import { urlFor } from "@/sanity/lib/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const BlogItem = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div
        className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 
                transition-transform duration-200 ease-out"
      >
        <Image
          className="object-cover object-left lg:object-center"
          src={urlFor(post.mainImage)}
          alt={post.author.name}
          fill
        />
        <div
          className="absolute bottom-0 w-full bg-black/20 backdrop-blur-lg
                  rounded drop-shadow-lg text-white p-5 flex justify-between"
        >
          <div>
            <p className="font-bold">{post.title}</p>
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
            {post.categories.map((category) => (
              <div
                className="bg-[#F7AB0A] text-center text-black px-3 py-1
                        rounded-full text-sm font-semibold"
                key={category._id}
              >
                <p>{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex-1">
        <p className="underline text-lg font-bold">{post.title}</p>
        <p className="line-clamp-2 text-gray-500">{post.description}</p>
      </div>

      <p className="mt-5 font-bold flex items-center group-hover:underline">
        Read Post <ArrowUpRightIcon className="ml-2 h-4 w-4" />
      </p>
    </div>
  );
};

export default BlogItem;
