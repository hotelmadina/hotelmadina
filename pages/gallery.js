import styles from "../styles/Gallery.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import Head from "next/head";

const Gallery = ({ setToggleMenu }) => {
  useEffect(() => {
    setToggleMenu(false);
  }, []);

  return (
    <>
      <Head>
        <title>Gallery | Hotel Madina</title>
        <meta name="description" content="Hotel Madina Gallery" />
      </Head>
      <div className={styles.hero_img}>
        <div className={styles.cta_container}>
          <h1>Gallery</h1>
        </div>
      </div>

      <section className={styles.img_container}>
        <div className={`${styles.img_grid} container`}>
          <div className={styles.img_container}>
            <Image src="/hotel-room-1.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-2.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-3.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-4.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-5.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-6.jpg" layout="fill" alt="gallery-image" />
          </div>

          <div className={styles.img_container}>
            <Image src="/hotel-room-4.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-3.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-2.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-5.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-6.jpg" layout="fill" alt="gallery-image" />
          </div>
          <div className={styles.img_container}>
            <Image src="/hotel-room-1.jpg" layout="fill" alt="gallery-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
