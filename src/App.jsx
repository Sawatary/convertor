import "./App.scss";
import "./fonts.scss";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slder";
import Discounts from "./components/DIscounts/Discounts";

function App() {
  return (
    <>
      <div>
        <Header />
        <Slider />
        <Discounts />
      </div>
    </>
  );
}

export default App;
