import styles from "./Slider.module.scss";

function Slider() {
  return (
    <div className={styles.sliderRight}>
      <div className={styles.info}>
        <h5 className={styles.sliderH5}>T-shirt / Tops</h5>
        <h1 className={styles.sliderH1}>Summer Value Pack</h1>
        <div>
          <p>cool / colorful / comfy</p>
        </div>
        <button className={styles.Btn}>Shop Now</button>
      </div>
    </div>
  );
}

export default Slider;
