import { groq } from "next-sanity";

export const postsQuery = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->,
    } | order(_createdAt desc)
`;

export const postQuery = groq`
    *[_type=="post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    }
`;

export const postPathsQuery = groq`
    *[_type=="post"] {
        slug
    }
`;