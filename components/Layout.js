import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, name}) {
  return (
    <div>
      <Head>
        <title>{pageTitle}Mon Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header name={name} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
