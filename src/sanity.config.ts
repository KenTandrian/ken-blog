import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from 'sanity/presentation';
import { structureTool } from "sanity/structure";

import Logo from "./components/Logo";
import StudioNavbar from "./components/StudioNavbar";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { defaultDocumentNode } from "./sanity/structure";
import { theme } from "./sanity/theme";

export default defineConfig({
  basePath: "/studio",
  name: "Blog_Content_Studio",
  title: "Blog Content Studio",
  projectId,
  dataset,
  schema,
  theme,
  plugins: [
    presentationTool({
      previewUrl: {
        origin: location.origin,
        previewMode: { enable: "/api/preview" },
      },
    }),
    structureTool({ defaultDocumentNode }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
