import Head from "next/head";
import ImageSlider from "../components/home_components/ImageSlider";
import Book from "../components/home_components/Book";
import Room from "../components/home_components/Room";
import Facilities from "../components/home_components/Facilities";
import * as fs from "fs";
import { useEffect } from "react";

export default function Home({ rooms, setToggleMenu }) {
  useEffect(() => {
    setToggleMenu(false);
  }, []);

  return (
    <>
      <Head>
        <title>Hotel Madina | Hotel in the Heart of Pink City</title>
        <meta
          name="description"
          content="Hotel Madina is one of the best hotels in Jaipur City for Tourists as it is near almost all the Tourist Places in Jaipur. Hotel Madina gives you home like feeling with careful pricing."
        />

        {/* Google Search Console Verification Tag */}

        <meta
          name="google-site-verification"
          content="Q7LyAjvvcfPfWm65eXj8bXzQ6Nbod8Rr2tIIGZocsqY"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main_container">
        <ImageSlider />
        <Room rooms={rooms} />
        <Book />
        <Facilities />
      </div>
    </>
  );
}

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
