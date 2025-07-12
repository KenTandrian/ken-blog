import { draftMode } from "next/headers";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import LiveVisualEditing from "@/components/LiveVisualEditing";
import PreviewBanner from "@/components/PreviewBanner";
import { SanityLive } from "@/sanity/lib/live";
import "@/styles/globals.css";

async function RootLayout({ children }: React.PropsWithChildren) {
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <>
      {isDraftMode && <PreviewBanner />}
      <div className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
        <SanityLive />
        {isDraftMode && <LiveVisualEditing />}
      </div>
    </>
  );
}

export default RootLayout;
