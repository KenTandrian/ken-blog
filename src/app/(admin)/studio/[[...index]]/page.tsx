import type { Metadata, Viewport } from "next";
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

import { Studio } from "./Studio";
// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  icons: "/favicon.ico",
  // Overrides the title until the Studio is loaded
  title: "Loading Studio...",
};

export const viewport: Viewport = {
  ...studioViewport,
  // Overrides the viewport to resize behavior
  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  return <Studio />;
}
