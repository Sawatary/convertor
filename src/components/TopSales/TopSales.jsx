import styles from "./topSales.module.scss";
import SectionHeading from "../UI/Heading/SectionHeading";

const TopSales = () => {
  return (
    <section className={styles.topSales}>
      <SectionHeading title="Big Saving Zone" />
    </section>
  );
};

export default TopSales