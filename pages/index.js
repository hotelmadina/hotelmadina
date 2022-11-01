import Head from "next/head";
import ImageSlider from "../components/home_components/ImageSlider";
import Book from "../components/home_components/Book";
import Room from "../components/home_components/Room";
import Facilities from "../components/home_components/Facilities";
import * as fs from "fs";

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

export default function Home({ rooms }) {
  return (
    <>
      <Head>
        <title>Hotel Madina | Hotel in the Heart of Pink City</title>
        <meta
          name="description"
          content="Hotel Madina is one of the best hotels in Jaipur City for Tourists as it is near almost all the Tourist Places in Jaipur. Hotel Madina gives you home like feeling with careful pricing."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta
          property="og:title"
          content="Hotel Madina | Hotel in the Heart of Pink City"
        />
        <meta
          property="og:description"
          content="Hotel Madina is one of the best hotels in Jaipur City for Tourists as it is near almost all the Tourist Places in Jaipur. Hotel Madina gives you home like feeling with careful pricing."
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

      <div className="main_container">
        <ImageSlider />
        <Room rooms={rooms} />
        <Book />
        <Facilities />
      </div>
    </>
  );
}
