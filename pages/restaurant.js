import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Restaurant.module.scss";
import * as fs from "fs";
import Head from "next/head";

const Restaurant = ({ setToggleMenu, ourMenu }) => {
  useEffect(() => {
    setToggleMenu(false);
  }, []);

  return (
    <>
      <Head>
        <title>Restaurant | Hotel Madina</title>
        <meta
          name="description"
          content="Hotel Madina Restaurant specially made for guests with amazing indian food varieties."
        />
      </Head>

      <div className={styles.hero_img}>
        <div className={styles.cta_container}>
          <h1>Restaurant</h1>
        </div>
      </div>

      <section className={styles.menu_section}>
        <div className="container">
          <div className={styles.grid_container}>
            {ourMenu.map((foodTime) => {
              return (
                <div key={foodTime.id} className={`${styles.grid_item}`}>
                  <div className={styles.heading_container}>
                    <h2>{foodTime.foodTime}</h2>
                    <p>
                      {foodTime.timings.from === "" &&
                      foodTime.timings.to === ""
                        ? "All Time"
                        : `Served from ${foodTime.timings.from} till ${foodTime.timings.to}`}
                    </p>
                  </div>

                  <div className={styles.dishes_container}>
                    {foodTime.dishes.map((dish) => {
                      return (
                        <div key={dish.id} className={styles.dish}>
                          <div className={styles.img_container}>
                            <Image
                              src={dish.img}
                              alt={dish.alt}
                              layout="fill"
                            />
                          </div>
                          <div className={styles.dish_details_container}>
                            <h3>{dish.name}</h3>
                            <p>{dish.para}</p>
                          </div>

                          <h3 className={styles.dish_price}>₹{dish.price}</h3>
                        </div>
                      );
                    })}
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
    let data = await fs.promises.readdir("restaurantapi");
    let myFile;
    let ourMenu = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      myFile = await fs.promises.readFile(`restaurantapi/${item}`, "utf-8");
      ourMenu.push(JSON.parse(myFile));
    }

    return {
      props: { ourMenu: ourMenu },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Restaurant;
