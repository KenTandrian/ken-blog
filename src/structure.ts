import { Iframe } from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case "post":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            // Required: Accepts an async function OR a string
            url: "/api/preview",

            // Optional: Set the default size
            defaultSize: "desktop", // default: `desktop`

            // Optional: Add a reload button, or reload on new document revisions
            reload: {
              button: true, // default: `undefined`
            },

            // Optional: Display a spinner while the iframe is loading
            loader: true,

            // Optional: Pass attributes to the underlying `iframe` element:
            // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
            attributes: {
              allow: "fullscreen", // string, optional
            },
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
