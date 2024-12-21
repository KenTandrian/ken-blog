import { urlFor } from "@/sanity/lib/image";
import type { PortableTextReactComponents } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: Image }) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            alt="Blog Post Image"
            className="object-contain"
            fill
            src={urlFor(value)}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: React.PropsWithChildren) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: React.PropsWithChildren) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: React.PropsWithChildren) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: React.PropsWithChildren) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: React.PropsWithChildren) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: React.PropsWithChildren) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    h5: ({ children }: React.PropsWithChildren) => (
      <h5 className="text-xl py-10 font-bold">{children}</h5>
    ),
    blockquote: ({ children }: React.PropsWithChildren) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
