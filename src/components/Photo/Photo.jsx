import styles from "./Photo.module.scss";

const Photo = () => {
  return (
    <div className={styles.photoContainer}>
      <div className={styles.card}>
        <img src="./src/assets/images/Photo/backgrond1.png" alt="" />
        <img src="./src/assets/images/Photo/backgrond2.png" alt="" />
      </div>
      <div className={styles.info}>
        <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
        <p>
          In our journey to improve everyday fashion, euphoria presents <br />
          EVERYDAY wear range - Comfortable & Affordable fashion 24/7
        </p>
        <button>Show Now</button>
      </div>
    </div>
  );
};

export default Photo;
