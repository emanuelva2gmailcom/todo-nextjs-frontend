import Header from "@/components/Header/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
          <Main />
          <NextScript />
        <div id="portal" />
        <div id="toast" className="fixed w-screen h-screen" />
      </body>
    </Html>
  );
}
