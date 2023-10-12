import styles from "./Arrival.module.scss";
import ArrivalCard from "./ArrivalCard/";

const Arrival = () => {
  return (
    <div className={styles.newArrival}>
      <div className={styles.name}>
        <svg
          width="6"
          height="30"
          viewBox="0 0 6 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="6" height="30" rx="3" fill="#8A33FD" />
        </svg>
        <h2 className={styles.arrivalH2}>New Arrival</h2>
      </div>
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
