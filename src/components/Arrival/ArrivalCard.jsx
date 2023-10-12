import styles from "./Arrival.module.scss";

const ArrivalCard = ({ title, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default ArrivalCard;