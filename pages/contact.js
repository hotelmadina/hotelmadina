import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import ContactAddress from "../components/ContactAddress";
import { useEffect } from "react";
import Head from "next/head";

const Contact = ({ setToggleMenu }) => {
  useEffect(() => {
    setToggleMenu(false);
  }, []);

  return (
    <>
      <Head>
        <title>Contact us | Hotel Madina</title>
        <meta
          name="description"
          content="Contact us 24/7 and we will respond to you as soon as possible."
        />
      </Head>

      <div className={styles.hero_img}>
        <div className={styles.cta_container}>
          <h1>Contact us</h1>
        </div>
      </div>

      <section className={styles.contact_container}>
        <div className={`${styles.grid_container} container`}>
          <div className={styles.address_details}>
            <div className={styles.heading_para}>
              <h2>Contact us</h2>
              <p className={styles.para}>
                Please fill the form if you have any query. We will reach you as
                soon as possible
              </p>
            </div>
            <ContactAddress styles={styles} />
          </div>

          <form
            name="messages v1"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className={styles.form}
          >
            <input type="hidden" name="form-name" value="messages v1" />
            <input name="bot-field" className={styles.bot_field_input} />
            <div className={styles.name_inputs}>
              <input type="text" placeholder="First Name" name="first_name" />
              <input type="text" placeholder="Last Name" name="last_name" />
            </div>
            <input type="email" placeholder="Email" name="email" />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message...."
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
