import type { SanityDocument } from "next-sanity";
import type { DefaultDocumentNodeResolver } from "sanity/structure";
import { Iframe } from "sanity-plugin-iframe-pane";

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument) {
  return doc?.slug?.current
    ? `/post/${doc.slug.current}`
    : new Error("Missing slug");
}

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
            url: {
              origin: "same-origin",
              preview: getPreviewUrl,
              draftMode: "/api/draft", // the route you enable draft mode, see: https://github.com/sanity-io/visual-editing/tree/main/packages/preview-url-secret#sanitypreview-url-secret
            },

            // Optional: Set the default size
            defaultSize: "desktop", // default: `desktop`

            // Optional: Display the Url in the pane
            showDisplayUrl: true, // boolean. default `true`.

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
              referrerPolicy: "strict-origin-when-cross-origin", // string, optional
              sandbox: "allow-same-origin allow-scripts", // string, optional
            },
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
