import styles from "./topSales.module.scss";
import SectionHeading from "../UI/Heading/SectionHeading";
import TopSalesCard from "./TopSalesCard";

const TopSales = () => {
  const TopSalesCards = [
    {
      title: "Hawaiian Shirts",
      description: "Dress up in summer vibe",
      discount: "UPTO 50% OFF",
      bacground: "./src/assets/images/TopSales/sales1.png",
      color: "white",
      flex: 33,
    },
    {
      title: "Printed T-Shirt",
      description: "New Designs Every Week",
      discount: "UPTO 40% OFF",
      bacground: "./src/assets/images/TopSales/sales2.png",
      color: "white",
      flex: 33,
    },
    {
      title: "Cargo Joggers",
      description: "Move with style & comfort",
      discount: "UPTO 50% OFF",
      bacground: "./src/assets/images/TopSales/sales3.png",
      color: "black",
      flex: 33,
    },
    {
      title: "Urban Shirts",
      description: "Live In Confort",
      discount: "FLAT 60% OFF",
      bacground: "./src/assets/images/TopSales/sales4.png",
      color: "black",
      flex: 50,
    },
    {
      title: "Oversized T-Shirts",
      description: "Street Style Icon",
      discount: "FLAT 60% OFF",
      bacground: "./src/assets/images/TopSales/sales5.png",
      color: "black",
      flex: 50,
    },
  ];

  return (
    <section className={styles.topSales}>
      <SectionHeading title="Big Saving Zone" />
      <ul className={styles.CardsList}>
        {TopSalesCards.map((obj) => {
          return (
            <TopSalesCard
              title={obj.title}
              description={obj.description}
              discount={obj.discount}
              bacground={obj.bacground}
              color={obj.color}
              flex={obj.flex}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TopSales;
