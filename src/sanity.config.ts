import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import Logo from "./components/Logo";
import StudioNavbar from "./components/StudioNavbar";
import { apiVersion, dataset, projectId } from "./lib/sanity.api";
import { schemaTypes } from "./schemas";
import { defaultDocumentNode } from "./structure";
import { myTheme } from "./theme";

export default defineConfig({
  basePath: "/studio",
  name: "Blog_Content_Studio",
  title: "Blog Content Studio",
  projectId,
  dataset,
  plugins: [
    deskTool({ defaultDocumentNode }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
