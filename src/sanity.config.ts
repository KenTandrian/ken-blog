import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { defineDocuments, presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import Logo from "@/components/Logo";
import StudioNavbar from "@/components/StudioNavbar";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { locations } from "@/sanity/presentation";
import { schema } from "@/sanity/schema";
import { defaultDocumentNode } from "@/sanity/structure";
import { theme } from "@/sanity/theme";

export default defineConfig({
  basePath: "/studio",
  icon: Logo,
  name: "Blog_Content_Studio",
  title: "Blog Content Studio",
  projectId,
  dataset,
  schema,
  theme,
  plugins: [
    codeInput(),
    presentationTool({
      previewUrl: {
        origin:
          typeof location === "undefined"
            ? "http://localhost:3000"
            : location.origin,
        previewMode: {
          enable: "/api/draft",
          disable: "/api/disable-draft",
        },
      },
      resolve: {
        locations,
        mainDocuments: defineDocuments([
          { route: "/", type: "post" },
          {
            route: "/post/:slug",
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
      },
    }),
    structureTool({ defaultDocumentNode }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
