import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { aboutThisHouse } from "./articles";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import HouseRules from "./HouseRulesPdf";
import WifiInfo from "./WifiPdf";
import PlacesToEat from "./PlacesToEat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body articles={aboutThisHouse} />} />
          <Route path="/house_rules" element={<HouseRules />} />
          {/* <Route path="/about_this_house" element={<Body />} /> */}
          <Route path="/places_to_eat" element={<PlacesToEat />} />
          {/* <Route path="/contact" element={<Body />} /> */}
          <Route path="/connect_to_wifi" element={<WifiInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
