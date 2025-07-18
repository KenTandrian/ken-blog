import { map } from "rxjs";
import { getDraftId } from "sanity";
import type { DocumentLocationResolver } from "sanity/presentation";

// Pass 'context' as the second argument
export const locations: DocumentLocationResolver = (params, context) => {
  // Set up locations for post documents
  if (params.type === "post") {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      {
        fetch: `*[_id==$id][0]{slug,title}`, 
        listen: `*[_id in [$id,$draftId]]`,
      },
      { id: params.id, draftId: getDraftId(params.id) },
      { perspective: "drafts" } // returns a draft article if it exists
    );

    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null;
        }
        return {
          locations: [
            { title: doc.title || "Untitled", href: `/${doc.slug.current}` },
            { title: "Posts", href: "/" },
          ],
        };
      })
    );
  }
  return null;
}
