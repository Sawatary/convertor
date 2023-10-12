import styles from "./Discounts.module.scss";

const DiscountsCard = ({
  title,
  discription,
  discount,
  searchItem,
  bacground,
}) => {
  return (
    <li
      className={styles.DiscountsCard}
      style={{
        backgroundImage: `url(${bacground})`,
      }}
    >
      <p className={styles.cardDiscription}>{discription}</p>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardHeading}>{title}</h3>
        <p className={styles.cardDiscount}>{discount}</p>
      </div>
      <h4 className={styles.searchItem}>{searchItem}</h4>
    </li>
  );
};

export default DiscountsCard;
