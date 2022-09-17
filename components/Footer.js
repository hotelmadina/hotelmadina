import styles from "../styles/componentstyles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import ContactAddress from "./ContactAddress";

const Footer = () => {
  return (
    <footer className={styles.main_container}>
      <div className={`container ${styles.grid_container}`}>
        <div className={styles.logo_column}>
          <Link href={"/"}>
            <div className={styles.footer_logo}>
              <h3>Hotel</h3>
              <h1>Madina</h1>
            </div>
          </Link>
        </div>

        <div className={styles.quick_link_column}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/rooms"}>
                <a>Rooms</a>
              </Link>
            </li>
            <li>
              <Link href={"/restaurant"}>
                <a>Restaurant</a>
              </Link>
            </li>
            <li>
              <Link href={"/gallery"}>
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <ContactAddress styles={styles} />

        <div className={styles.hindi_brand_column}>
          <Link href={"/"}>
            <div
              className={`${styles.footer_logo} ${styles.footer_logo_hindi}`}
            >
              <h3>होटल</h3>
              <h1>मदीना</h1>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
