import styles from "./Arrival.module.scss";
import SectionHeading from "../UI/Heading/SectionHeading";
import ArrivalCard from "./ArrivalCard/";

const Arrival = () => {
  return (
    <div className={styles.newArrival}>
      <SectionHeading title="New Arrival" />
      
      <div className={styles.allCard}>
        <div className={styles.card}>
          <img src="/src/assets/images/Arrival/card1.png" alt="" />
          <p>Knitted Joggers</p>
        </div>
        <div className={styles.card}>
          <img src="/src/assets/images/Arrival/card2.png" alt="" />
          <p>Full Sleeve</p>
        </div>
        <div className={styles.card}>
          <img src="/src/assets/images/Arrival/card3.png" alt="" />
          <p>Active T-Shirts</p>
        </div>
        <div className={styles.card}>
          <img src="/src/assets/images/Arrival/card4.png" alt="" />
          <p>Urban Shirts</p>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
