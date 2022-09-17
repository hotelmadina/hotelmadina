import styles from "../styles/componentstyles/Navbar.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = ({ toggleMenu, setToggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`${scrolled ? `${styles.scrolled}` : ``} ${
        styles.navbar_container
      }`}
    >
      <nav className={`${styles.navbar} container`}>
        <Link href={"/"}>
          <div className={styles.navbar_logo}>
            <h3>Hotel</h3>
            <h1>Madina</h1>
          </div>
        </Link>

        <ul
          className={`${styles.navbar_list} ${
            toggleMenu ? `${styles.menu_true}` : ``
          }`}
        >
          <li
            className={`${styles.nav_link_1} ${
              toggleMenu ? `${styles.link_true}` : ``
            }`}
          >
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`${styles.nav_link_2} ${
              toggleMenu ? `${styles.link_true}` : ``
            }`}
          >
            <Link href={"/rooms"}>
              <a>Rooms</a>
            </Link>
          </li>
          <li
            className={`${styles.nav_link_3} ${
              toggleMenu ? `${styles.link_true}` : ``
            }`}
          >
            <Link href={"/restaurant"}>
              <a>Restaurant</a>
            </Link>
          </li>
          <li
            className={`${styles.nav_link_4} ${
              toggleMenu ? `${styles.link_true}` : ``
            }`}
          >
            <Link href={"/gallery"}>
              <a>Gallery</a>
            </Link>
          </li>
          <li
            className={`${styles.nav_link_5} ${
              toggleMenu ? `${styles.link_true}` : ``
            }`}
          >
            <Link href={"/contact"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <button
          className={`${toggleMenu ? `${styles.open}` : ``} ${
            styles.menu_toggle
          }`}
          onClick={() => setToggleMenu(!toggleMenu)}
          role="button"
        >
          <div className={`${styles.hamburger}`}></div>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
