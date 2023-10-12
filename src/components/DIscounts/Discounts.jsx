import styles from "./Discounts.module.scss";
import DiscountsCard from "./DiscountsCard";

const Discounts = () => {
  const DiscountCard = [
    {
      id: "0",
      title: "High Coziness",
      discription: "Low Price",
      discount: "UPTO 50% OFF",
      searchItem: "Explore Items",
      bacground: "./src/assets/images/Discounts/dis1.jpg",
    },
    {
      id: "1",
      title: "Breezy Summer Style",
      discription: "Beyoung Presents",
      discount: "UPTO 50% OFF",
      searchItem: "Explore Items",
      bacground: "./src/assets/images/Discounts/dis1.jpg",
    },
  ];

  return (
    <section>
      <ul className={styles.DiscountList}>
        {DiscountCard.map((item) => {
          return (
            <DiscountsCard
              key={item.id}
              title={item.title}
              discription={item.discription}
              discount={item.discount}
              searchItem={item.searchItem}
              bacground={item.bacground}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Discounts;
