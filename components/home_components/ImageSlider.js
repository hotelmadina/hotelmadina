import styles from "../../styles/componentstyles/ImageSlider.module.scss";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const ImageSlider = () => {
  return (
    <section className={styles.image_slider}>
      <div className={`${styles.cta_container} container`}>
        <h1>
          <Typewriter
            options={{
              strings: [
                "Are you dreaming of a place to stay? We are here!",
                "A hotel in the heart of Pink City",
                "Welcome to Hotel Madina",
                "We are a home away from home",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <Link href={"/gallery"}>
          <a>
            <button className={styles.cta}>Explore</button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ImageSlider;
