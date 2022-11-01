import Link from "next/link";
import styles from "../styles/Success.module.scss";
import Head from "next/head";

const Success = () => {
  return (
    <>
      <Head>
        <title>Success | Hotel Madina</title>
        <meta
          name="description"
          content="The Contact Form has been submitted successfully!"
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Success | Hotel Madina" />
        <meta
          property="og:description"
          content="The Contact Form has been submitted successfully!"
        />
        <meta property="og:site_name" content="Hotel Madina" />

        <meta
          name="google-site-verification"
          content="Q7LyAjvvcfPfWm65eXj8bXzQ6Nbod8Rr2tIIGZocsqY"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon_io/site.webmanifest" />
      </Head>
      <section className={styles.image_slider}>
        <div className={styles.cta_container}>
          <h1>Your Message has been Successfully Sent!!</h1>
          <Link href={"/"}>
            <a>
              <button className={styles.cta}>Back to Site</button>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;
