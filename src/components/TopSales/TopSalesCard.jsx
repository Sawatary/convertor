import styles from "./topSales.module.scss";

const TopSalesCard = ({
  title,
  description,
  discount,
  bacground,
  color,
  flex,
}) => {
  return (
    <li
      className={flex == 33 ? styles.topSalesCard33 : styles.topSalesCard50}
      style={{
        backgroundImage: `url(${bacground})`,
      }}
    >
      <div className={flex == 33 ? styles.cardInfo33 : styles.cardInfo50}>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{discount}</h4>
        {color == "white" ? (
          <svg
          className={styles.arrow}
            width="23"
            height="26"
            viewBox="0 0 23 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="arrow"
              d="M11.8423 1.66675L11.8423 23.675M22 15.2103L13.0394 24.1709C12.3783 24.832 11.3064 24.832 10.6452 24.1709L1.68465 15.2103"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        ) : (
          <svg
          className={styles.arrow}
            width="27"
            height="31"
            viewBox="0 0 27 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="arrow"
              d="M13.6864 2.04785L13.6864 27.88M25.6089 17.9446L15.0914 28.462C14.3154 29.238 13.0573 29.238 12.2813 28.462L1.76383 17.9446"
              stroke="#3C4242"
              stroke-width="2.28571"
              stroke-linecap="round"
            />
          </svg>
        )}
        <button
          className={
            color == "white" ? styles.salesBtnWhite : styles.salesBtnBlack
          }
        >
          SHOP NOW
        </button>
      </div>
    </li>
  );
};

export default TopSalesCard;
