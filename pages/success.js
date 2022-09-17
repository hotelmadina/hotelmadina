import Link from "next/link";
import styles from "../styles/Success.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  useEffect(() => {
    const routeToHome = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearTimeout(routeToHome);
    };
  }, []);

  return (
    <>
      <section className={styles.image_slider}>
        <div className={styles.cta_container}>
          <h1>Your Message has been Successfully Sent!!</h1>
          <Link href={"/"}>
            <a>
              <button className={styles.cta}>Back to Site</button>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;
