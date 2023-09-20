import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";
import { defaultDocumentNode } from "./structure";
import { apiVersion, dataset, projectId } from "./lib/sanity.api";

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
