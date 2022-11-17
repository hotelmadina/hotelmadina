import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import ContactAddress from "../components/ContactAddress";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact us | Hotel Madina</title>
        <meta
          name="description"
          content="Contact us 24/7 and we will connect with you"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Contact us | Hotel Madina" />
        <meta
          property="og:description"
          content="Contact us 24/7 and we will respond to you as soon as possible."
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
