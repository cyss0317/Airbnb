import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { aboutThisHouse } from "./articles";
import Body from "./Body";
import Footer from "./Footer";
import GettingHere from "./GettingHere";
import Header from "./Header";
import HouseRules from "./HouseRulesPdf";
import PlacesToGo from "./PlacesToEat";
import WifiInfo from "./WifiPdf";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body articles={aboutThisHouse} />} />
        <Route path="/getting_here" element={<GettingHere />} />
        <Route path="/house_rules" element={<HouseRules />} />
        <Route path="/places_to_eat" element={<PlacesToGo />} />
        <Route path="/connect_to_wifi" element={<WifiInfo />} />
        <Route path="*" element={<Body articles={aboutThisHouse} />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
