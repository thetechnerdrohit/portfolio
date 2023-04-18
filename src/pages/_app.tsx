import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat } from "next/font/google";
import Footer from "~/components/Footer/Footer";
import Navbar from "~/components/Navbar/Navbar";

import "~/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`${montserrat.variable} min-h-screen w-full bg-light font-mont`}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default MyApp;
