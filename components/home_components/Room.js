import styles from "../../styles/componentstyles/Room.module.scss";
import Image from "next/image";

const Rooms = ({ rooms }) => {
  return (
    <section className={styles.main_container}>
      <div className={`${styles.grid_container} container`}>
        <div className={styles.heading_container}>
          <h2>Our Rooms</h2>
          <p>
            All our guestrooms are elegantly furnished with handmade furniture
            include luxury en-suite facilities with complimentary amenities
            pack, flat screen LCD TV, tea/coffee making facilities, fan,
            hairdryer and the finest pure white linen and towels.
          </p>
        </div>

        <div className={styles.rooms_container}>
          {rooms.map((room) => {
            return (
              <div key={room.id} className={styles.room}>
                <div className={styles.img_container}>
                  <Image src={room.img} alt={room.alt} layout="fill" />
                </div>

                <div className={styles.room_details}>
                  <h4>{room.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
