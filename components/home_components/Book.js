import styles from "../../styles/componentstyles/Book.module.scss";
import Image from "next/image";

const Book = () => {
  return (
    <div className={styles.main_container}>
      <div className={`${styles.booking_container} container`}>
        <div className={styles.heading_container}>
          <div className={styles.img_container}>
            <Image
              src="/checkmark.svg"
              layout="fill"
              className={styles.icons}
              alt="checkmark"
            />
          </div>
          <h2>Book Now</h2>
        </div>

        <div className={styles.arrows_container}>
          <div className={styles.img_container}>
            <Image
              src="/right-arrow.svg"
              alt="right arrow"
              layout="fill"
              className={styles.icons}
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/right-arrow.svg"
              alt="right arrow"
              layout="fill"
              className={styles.icons}
            />
          </div>
          <div className={styles.img_container}>
            <Image
              src="/right-arrow.svg"
              alt="right arrow"
              layout="fill"
              className={styles.icons}
            />
          </div>
        </div>

        <div className={styles.number_container}>
          <div className={styles.img_container}>
            <Image
              src="/phone.svg"
              alt="call"
              className={styles.icons}
              layout="fill"
            />
          </div>
          <h2>+91-7877004446</h2>
        </div>
      </div>
    </div>
  );
};

export default Book;
