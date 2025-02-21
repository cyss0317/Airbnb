import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { aboutThisHouse } from "./articles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about_this_house" element={<Body articles={aboutThisHouse} />} />
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
