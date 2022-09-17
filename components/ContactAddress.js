import Image from "next/image";

const ContactAddress = ({ styles }) => {
  return (
    <>
      <div className={styles.contact_column}>
        <div className={`${styles.address} ${styles.contact_item}`}>
          <div className={styles.icon_container}>
            <Image
              src="/location.svg"
              alt="address"
              className={styles.icons}
              layout="fill"
            />
          </div>
          <span>859, Loharo Ka Khurra, Ghat Gate, Rajasthan, Jaipur</span>
        </div>

        <div className={`${styles.phone} ${styles.contact_item}`}>
          <div className={styles.icon_container}>
            <Image
              src="/phone.svg"
              alt="call"
              className={styles.icons}
              layout="fill"
            />
          </div>
          <span>+91-7877004446</span>
        </div>

        <div className={`${styles.mail} ${styles.contact_item}`}>
          <div className={styles.icon_container}>
            <Image
              src="/envelope.svg"
              alt="call"
              className={styles.icons}
              layout="fill"
            />
          </div>
          <span>info@hotelmadinajaipur.com</span>
        </div>
      </div>
    </>
  );
};

export default ContactAddress;
