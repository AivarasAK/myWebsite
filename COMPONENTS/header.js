import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { locales } from "../locales";

export default function Header() {
  const router = useRouter();

  return (
    <div className="classname">
      <Head>
        <title>{locales.head.title[router.locale]}</title>

        <meta
          key="verifygoogle"
          name="google-site-verification"
          content="Ptqe5CVM-M39SucSy89D4wYGQ_ymT3If6XRvK3uFtN0"
        />

        <meta
          name="description"
          content={locales.head.metaContent[router.locale]}
          key="desc"
        ></meta>

        <meta name="robots" content="all" key="robots" />
        <meta name="googlebot" content="all" key="googlebots" />
        <meta
          key="params"
          name="viewport"
          content="width=device-width, minimum-scale=1.0"
        />
        <meta charSet="utf-8"></meta>

        <link
          key="ltver"
          rel="alternate"
          hrefLang="lt"
          href="https://techforweb.com/lt"
        />
        <link
          key="enver"
          rel="alternate"
          hrefLang="en"
          href="https://techforweb.com"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
      </Head>
    </div>
  );
}
