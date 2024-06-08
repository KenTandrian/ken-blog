import { draftMode } from "next/headers";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import LiveVisualEditing from "@/components/LiveVisualEditing";
import PreviewBanner from "@/components/PreviewBanner";
import "@/styles/globals.css";

function RootLayout({ children }: React.PropsWithChildren) {
  const isDraftMode = draftMode().isEnabled;
  return (
    <html>
      <body>
        {isDraftMode && <PreviewBanner />}
        <div className="max-w-7xl mx-auto">
          <Header />
          <Banner />
          {children}
          {isDraftMode && <LiveVisualEditing />}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
