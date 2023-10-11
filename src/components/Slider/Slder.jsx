import styles from "./Slider.module.scss";

function Slider() {
  return (
    <div className={styles.sliderRight}>
      <div className={styles.info}>
        <div className={styles.sliderH5}>
          <h5 className="">T-shirt / Tops</h5>
        </div>
        <div className={styles.sliderH1}>
          <h1>Summer Value Pack</h1>
          <p>cool / colorful / comfy</p>
        </div>
        <div className="Btn-Slider">
          <button className="Btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Slider;