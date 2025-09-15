import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";

import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";
import { token } from "@/sanity/lib/token";

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
