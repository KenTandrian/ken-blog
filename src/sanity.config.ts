import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import Logo from "./components/Logo";
import StudioNavbar from "./components/StudioNavbar";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { defaultDocumentNode } from "./structure";
import { myTheme } from "./theme";

export default defineConfig({
  basePath: "/studio",
  name: "Blog_Content_Studio",
  title: "Blog Content Studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ defaultDocumentNode }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema,
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
