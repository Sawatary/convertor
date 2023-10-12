import styles from "./Arrival.module.scss";
import SectionHeading from "../UI/Heading/SectionHeading";
import ArrivalCard from "./ArrivalCard/";

const Arrival = () => {
  const ArrivalCards = [
    {
      id: "0",
      title: "Knitted Joggers",
      imgUrl: "./src/assets/images/Arrival/card1.png",
    },
    {
      id: "1",
      title: "Full Sleeve",
      imgUrl: "./src/assets/images/Arrival/card2.png",
    },
    {
      id: "2",
      title: "Active T-Shirts",
      imgUrl: "./src/assets/images/Arrival/card3.png",
    },
    {
      id: "3",
      title: "Urban Shirts",
      imgUrl: "./src/assets/images/Arrival/card4.png",
    },
  ];
  return (
    <div className={styles.newArrival}>
      <SectionHeading title="New Arrival" />

      <div className={styles.allCard}>
        {ArrivalCards.map((item) => {
          return (
            <ArrivalCard
              key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
            />
          );
        })}
        </div>
      </div>
  );
};

export default Arrival;