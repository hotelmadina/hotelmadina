import Image from "next/image";
import styles from "../../styles/componentstyles/Facilities.module.scss";

const Facilities = () => {
  return (
    <section className={styles.main_container}>
      <div className="container">
        <div className={styles.heading}>
          <h2>Our Facilities</h2>
        </div>

        <div className={styles.facility_grid}>
          <div className={styles.facility}>
            <div className={styles.img_container}>
              <Image
                src="/wifi.svg"
                alt="Free Wifi"
                layout="fill"
                className={styles.icons}
              />
            </div>

            <p>Free Wifi</p>
          </div>

          <div className={styles.facility}>
            <div className={styles.img_container}>
              <Image
                src="/laundry.svg"
                alt="Laundry Service"
                layout="fill"
                className={styles.icons}
              />
            </div>

            <p>Laundry Service</p>
          </div>

          <div className={styles.facility}>
            <div className={styles.img_container}>
              <Image
                src="/doctor.svg"
                alt="Doctor on Call"
                layout="fill"
                className={styles.icons}
              />
            </div>

            <p>Doctor on Call</p>
          </div>

          <div className={styles.facility}>
            <div className={styles.img_container}>
              <Image
                src="/food.svg"
                alt="Hygienic Food"
                layout="fill"
                className={styles.icons}
              />
            </div>

            <p>Hygienic Food</p>
          </div>

          <div className={styles.facility}>
            <div className={styles.img_container}>
              <Image
                src="/service.svg"
                alt="24/7 Service"
                layout="fill"
                className={styles.icons}
              />
            </div>

            <p>24/7 Service</p>
          </div>

          <div className={styles.facility}>
            <div className={styles.img_container}>
              <Image
                src="/tv.svg"
                alt="Large TV"
                layout="fill"
                className={styles.icons}
              />
            </div>

            <p>Large TV</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
