import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
