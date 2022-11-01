import styles from "../styles/Rooms.module.scss";
import Image from "next/image";
import * as fs from "fs";
import Head from "next/head";

const Rooms = ({ rooms }) => {
  return (
    <>
      <Head>
        <title>Rooms | Hotel Madina</title>
        <meta
          name="description"
          content="Rooms in Hotel Madina are super comfortable. We have almost all types of rooms. Single Bed, Four Bed, Triple Bed, AC, Non AC etc."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Rooms | Hotel Madina" />
        <meta
          property="og:description"
          content="Rooms in Hotel Madina are super comfortable. We have almost all types of rooms. Single Bed, Four Bed, Triple Bed, AC, Non AC etc."
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

      <div className={styles.hero_img}>
        <div className={styles.cta_container}>
          <h1>Rooms</h1>
        </div>
      </div>

      <section className={styles.rooms_container}>
        <div className="container">
          <div className={styles.grid_container}>
            {rooms.map((room) => {
              return (
                <div key={room.id} className={styles.grid_item}>
                  <div className={styles.img_container}>
                    <Image src={room.img} layout="fill" alt={room.alt} />
                  </div>
                  <div className={styles.room_front_details}>
                    <h2>{room.name}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps(context) {
  try {
    let data = await fs.promises.readdir("roomsapi");
    let myFile;
    let rooms = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      myFile = await fs.promises.readFile(`roomsapi/${item}`, "utf-8");
      rooms.push(JSON.parse(myFile));
    }

    return {
      props: { rooms: rooms },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Rooms;
