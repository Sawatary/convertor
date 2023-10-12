import "./App.scss";
import "./fonts.scss";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slder";
import Discounts from "./components/DIscounts/Discounts";
import Arrival from "./components/Arrival/Arrival"

function App() {
  return (
    <>
      <div>
        <Header />
        <Slider />
        <Discounts />
        <Arrival />
      </div>
    </>
  );
}

export default App;
