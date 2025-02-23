import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { aboutThisHouse, houseRules } from "./articles";
import HouseRules from "./HouseRulesPdf";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body articles={aboutThisHouse} />} />
          <Route path="/house_rules" element={<HouseRules />} />
          {/* <Route path="/about_this_house" element={<Body />} />
          <Route path="/places_to_eat" element={<Body />} />
          <Route path="/contact" element={<Body />} /> */}
          {/* <Route path="/about" element={<h1>about</h1>} />
          <Route path="/" element={<Body />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
