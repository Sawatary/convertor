import "./App.scss";
import "./fonts.scss";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slder";
import Discounts from "./components/DIscounts/Discounts";
import Arrival from "./components/Arrival/Arrival";
import TopSales from "./components/topSales/topSales";

function App() {
  return (
    <>
      <div>
        <Header />
        <Slider />
        <Discounts />
        <Arrival />
        <TopSales />
      </div>
    </>
  );
}

export default App;
