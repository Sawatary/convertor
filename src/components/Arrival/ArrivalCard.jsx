import styles from "./Arrival.module.scss";

const ArrivalCard = ({ title, imgUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default ArrivalCard;
