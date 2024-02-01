import { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Compenents/Header/Header";
import { Footer } from "./Compenents/Footer/Footer";
import { HideNav } from "./Contexts/Hide-nav-context";
import { Loading } from "./Compenents/Preloading/Loading";
import { Home } from "./Compenents/Home/Home";
import { Scroll } from "./Compenents/Scroll/Scroll";


function App() {
  let [shownav, setshownav] = useState({
    opacity: "opacity-0",
    icon: "bi bi-list",
  });
  function Hidenav() {
    setshownav(function (prev) {
      return {
        ...prev,
        opacity: "opacity-0",
        icon: "bi bi-list",
      };
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <HideNav.Provider value={{ shownav, setshownav, Hidenav }}>
      <Router>
        <Header />
        <Routes>
          <Route path="Keroumi-V1/" element={<Home />}
          />
        </Routes>
        <Scroll />
      </Router>
    </HideNav.Provider>
  );
}

export default App;
