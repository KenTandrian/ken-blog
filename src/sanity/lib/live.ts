import { createClient, defineLive } from "next-sanity";

import { token } from "@/sanity/lib/token";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

const client = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion,
  stega: { studioUrl: "/studio" },
});

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
});
