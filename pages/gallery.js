import styles from "../styles/Gallery.module.scss";
import Image from "next/image";
import Head from "next/head";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery | Hotel Madina</title>
        <meta name="description" content="Hotel Madina Gallery" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Gallery | Hotel Madina" />
        <meta property="og:description" content="Hotel Madina Gallery" />
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
      <div className={styles.hero_img}>
        <div className={styles.cta_container}>
          <h1>Gallery</h1>
        </div>
      </div>

      <section className={styles.img_container}>
        <div className={`${styles.img_grid} container`}>
          <div className={styles.img_container}>
            <Image
              src="/rooms/main_gallery.jpg"
              layout="fill"
              alt="gallery-image"
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/rooms/hotel_design.jpg"
              layout="fill"
              alt="gallery-image"
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/rooms/main_gallery_1.jpg"
              layout="fill"
              alt="gallery-image"
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/rooms/hotel_design_1.jpg"
              layout="fill"
              alt="gallery-image"
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/rooms/double_bed.jpg"
              layout="fill"
              alt="gallery-image"
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/rooms/double_bed_ac.jpg"
              layout="fill"
              alt="gallery-image"
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/rooms/double_bed_1.jpg"
              layout="fill"
              alt="gallery-image"
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/rooms/triple_bed.jpg"
              layout="fill"
              alt="gallery-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
