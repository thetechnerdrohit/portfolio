/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AnimatePresence } from "framer-motion";
import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import Cursor from "~/components/Cursor";
import Footer from "~/components/Footer/Footer";
import Navbar from "~/components/Navbar/Navbar";

import "~/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

const MyApp: AppType = ({ Component, pageProps }) => {
  const path = usePathname();

  return (
    <main
      className={`${montserrat.variable} min-h-screen w-full bg-light font-mont dark:bg-dark`}
    >
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={path} {...pageProps} />
       {/* <Cursor /> */}
      </AnimatePresence>
      <Footer />
    </main>
  );
};

export default MyApp;
