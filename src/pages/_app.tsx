import { AnimatePresence } from "framer-motion";
import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import Footer from "~/components/Footer/Footer";
import Navbar from "~/components/Navbar/Navbar";

import "~/styles/globals.css";
import { api } from "~/utils/api";

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
      </AnimatePresence>
      <Footer />
    </main>
  );
};

export default api.withTRPC(MyApp);