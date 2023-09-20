import { createClient } from "next-sanity";
import { cache } from "react";
import { apiVersion, dataset, projectId } from "./sanity.api";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export const cachedClient = cache(client.fetch.bind(client));
