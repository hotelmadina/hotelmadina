import Image from "next/image";
import styles from "../styles/componentstyles/Loader.module.scss";

const Loading = () => {
  return (
    <>
      <div className={styles.loader_container}>
        <div className={styles.img_container}>
          <Image src="/loader.svg" layout="fill" alt="Loading...." />
        </div>
      </div>
    </>
  );
};

export default Loading;
