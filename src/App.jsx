import { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./Compenents/Header/Header";
import { Footer } from "./Compenents/Footer/Footer";
import { HideNav } from "./Contexts/Hide-nav-context";
import { Loading } from "./Compenents/Preloading/Loading";
import { Home } from "./Compenents/Home/Home";
import { Scroll } from "./Compenents/Scroll/Scroll";
import { Contact } from "./Compenents/Contact/Contact";
import { About } from "./Compenents/About/About";
import { StoreHeader } from "./Compenents/Store_Part/Store-Header";


function App() {
  let location = useLocation()
  let currentpath = location.pathname
  let [shownav, setshownav] = useState({
    opacity: "invisible",
    icon: "bi bi-list",
  });
  function Hidenav() {
    setshownav(function (prev) {
      return {
        ...prev,
        opacity: "invisible",
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
        {
          currentpath !== "/Keroumi-V1/Protein"  ? <Header /> : <StoreHeader />
        }
        <Routes>
          <Route path="Keroumi-V1/" element={<Home />}/>
          <Route path="Keroumi-V1/Contact" element={<Contact/>} />
          <Route path="Keroumi-V1/About" element={<About/>}/>
        </Routes>
        <Scroll />
        {
          currentpath === "/Keroumi-V1/" ? <Footer footer_responsive ="sm:top-[4100px] top-[2950px] small_tablet:top-[1400px]"/> : <></>
        }
        {
          currentpath === "/Keroumi-V1/Contact" ? <Footer footer_responsive="top-[400px] small_tablet:top-[200px]" /> : <></>
        }
        {
          currentpath === "/Keroumi-V1/About" ? <Footer footer_responsive="top-[2100px] small_tablet:top-[500px]"/> : <></>
        }
    </HideNav.Provider>
  );
}

export default App;
