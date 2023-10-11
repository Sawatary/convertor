import styles from "./Slider.module.scss";

function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderRight}>
        <h5 className={styles.sliderH5}>T-shirt / Tops</h5>

        <div className={styles.sliderHeading}>
          <h1 className={styles.sliderH1}>Summer Value Pack</h1>
          <p>cool / colorful / comfy</p>
        </div>

        <button className={styles.Btn}>Shop Now</button>
      </div>
    </div>
  );
}

export default Slider;
