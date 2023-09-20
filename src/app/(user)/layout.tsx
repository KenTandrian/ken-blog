import { draftMode } from "next/headers";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import PreviewBanner from "@/components/PreviewBanner";
import "@/styles/globals.css";

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {
  const isDraftMode = draftMode().isEnabled
  return (
    <html>
      <body>
        {isDraftMode && <PreviewBanner />}
        <div className="max-w-7xl mx-auto">
          <Header />
          <Banner />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
