import { useState,lazy,Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./Compenents/Header/Header";
import { HideNav } from "./Contexts/Hide-nav-context";
import { Loading } from "./Compenents/Preloading/Loading";
import { Scroll } from "./Compenents/Scroll/Scroll";
import  StoreHeader  from "./Compenents/Store_Part/Store-Header";
const Footer = lazy(()=>import('./Compenents/Footer/Footer'))
const Home = lazy(()=> import('./Compenents/Home/Home'))
const Contact = lazy(()=> import('./Compenents/Contact/Contact'))
const About = lazy(()=> import('./Compenents/About/About'))
// const StoreHeader = lazy(()=>import('./Compenents/Store_Part/Store-Header'))
function App() {
  let [isloaded,setisloaded] = useState({
    footer1: false,
    footer2: false,
    footer3: false
  })
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
  function Footer1(){
    setisloaded(function(prev){
      return {
        ...prev,
        footer1 : prev.footer1 = true
      }
    })
  }
  function Footer2(){
    setisloaded(function(prev){
      return {
        ...prev,
        footer2 : prev.footer2 = true
      }
    })
  }
  function Footer3(){
    setisloaded(function(prev){
      return {
        ...prev,
        footer3 : prev.footer3 = true
      }
    })
  }
  return (
    <HideNav.Provider value={{ shownav, setshownav, Hidenav }}>
        {
          currentpath !== "/Keroumi-V1/Protein"  ? <Header /> : <StoreHeader />
        }
        <Routes>
          <Route path="Keroumi-V1/" element={
            <Suspense fallback={<Loading/>}>
              <Home onload={Footer1}/>
            </Suspense>
          }/>
          <Route path="Keroumi-V1/Contact" element={
            <Suspense fallback={<Loading />}>
              <Contact onload={Footer2}/>
            </Suspense>
          } />
          <Route path="Keroumi-V1/About" element={
            <Suspense fallback={<Loading/>}>
              <About onload={Footer3}/>
            </Suspense>
          }/>
        </Routes>
        <Scroll />
        {
          currentpath === "/Keroumi-V1/" && isloaded.footer1 ? 
          <Suspense>
            <Footer footer_responsive ="sm:top-[4100px] top-[2950px] small_tablet:top-[1400px]"/>
          </Suspense> : <></>
        }
        {
          currentpath === "/Keroumi-V1/Contact" && isloaded.footer2 ? 
          <Suspense>
            <Footer footer_responsive="top-[400px] small_tablet:top-[200px]" />
          </Suspense> : <></>
        }
        {
          currentpath === "/Keroumi-V1/About" && isloaded.footer3 ? 
          <Suspense>
            <Footer footer_responsive="top-[2100px] small_tablet:top-[500px]"/>
          </Suspense> : <></>
        }
    </HideNav.Provider>
  );
}

export default App;
