import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->,
    } | order(_createdAt desc)
`;

export const POST_QUERY = groq`
    *[_type=="post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    }
`;

export const POST_PATHS_QUERY = groq`
    *[_type=="post"] {
        slug
    }
`;
