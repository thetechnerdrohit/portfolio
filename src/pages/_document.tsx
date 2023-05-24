/* eslint-disable @next/next/inline-script-id */
import { Html, Main, NextScript, Head } from "next/document";
import Script from "next/script";
import React from "react";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-primaryDark">
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            } else {
            document.documentElement.classList.remove('dark')
            }
        `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
