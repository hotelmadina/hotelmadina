import styles from "../styles/Rooms.module.scss";
import { useEffect } from "react";
import Image from "next/image";
import * as fs from "fs";
import Head from "next/head";

const Rooms = ({ setToggleMenu, rooms }) => {
  useEffect(() => {
    setToggleMenu(false);
  }, []);

  return (
    <>
      <Head>
        <title>Rooms | Hotel Madina</title>
        <meta
          name="description"
          content="Rooms in Hotel Madina are super comfortable. We have almost all types of rooms. Single Bed, Four Bed, Triple Bed, AC, Non AC etc."
        />
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
                    <p className={styles.room_price}>₹{room.price}/Day</p>
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
