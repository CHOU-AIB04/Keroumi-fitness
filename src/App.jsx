import { useState,lazy,Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./Compenents/Header/Header";
import { HideNav } from "./Contexts/Hide-nav-context";
import { Loading } from "./Compenents/Preloading/Loading";
import { Scroll } from "./Compenents/Scroll/Scroll";
import Background from "./Compenents/Store_Part/StoreBackground/Background";
import  StoreHeader  from "./Compenents/Store_Part/Header/Store-Header";
import StoreFooter from "./Compenents/Store_Part/Footer/Store-Footer";
import Alter from "./Compenents/Alter-preloader/Alter";
import { useEffect } from "react";
import { shareProductDetails } from "./Contexts/ProductDetails";
const StorePage = lazy(()=>import('./Compenents/Store_Part/Store_Page/StorePage'))
const Footer = lazy(()=>import('./Compenents/Footer/Footer'))
const Home = lazy(()=> import('./Compenents/Home/Home'))
const Contact = lazy(()=> import('./Compenents/Contact/Contact'))
const About = lazy(()=> import('./Compenents/About/About'))
const ProductDetails = lazy(()=> import('./Compenents/Store_Part/ProductDetail/ProductDetails')) ;
const Card = lazy(()=>import('./Compenents/Store_Part/Card/Card'))

function App() {
  let [selecteditem , setselecteditem] = useState(null)
  let [isloaded,setisloaded] = useState({
    footer1: false,
    footer2: false,
    footer3: false,
    header : false,
    storeHeader : false,
    storeFooter: false
  })
  let location = useLocation()
  let currentpath = location.pathname
  function handle_click(){
    setshownav(function(prev){
        return {
            ...prev,
            opacity : prev.opacity === "invisible" ? "visible" : "invisible",
            icon : prev.icon === "bi bi-list" ? "bi bi-x" : "bi bi-list"
        }
    })
}
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
    scroll()
  }
  function scroll(){
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function Footer1(){
    setisloaded(function(prev){
      return {
        ...prev,
        footer1 : prev.footer1 = true,
        header : prev.header = true
      }
    })
  }
  function Footer2(){
    setisloaded(function(prev){
      return {
        ...prev,
        footer2 : prev.footer2 = true,
        header : prev.header = true
      }
    })
  }
  function Footer3(){
    setisloaded(function(prev){
      return {
        ...prev,
        footer3 : prev.footer3 = true,
        header : prev.header = true
      }
    })
  }
  function Storeloading(){
    setisloaded((prev)=>{
      return {
        ...prev,
        storeHeader : prev.storeHeader = true,
        storeFooter : prev.storeFooter = true
      }
    })
  }
  return (
    <HideNav.Provider value={{ shownav, setshownav, Hidenav,handle_click,scroll}}>
    <shareProductDetails.Provider value={{selecteditem,setselecteditem}}>
        {
          currentpath === "/Keroumi-V1/Protein/Product-details" || currentpath === "/Keroumi-V1/Protein" || currentpath === "/keroumi-V1/Protein/Card" &&  isloaded.storeHeader ? <><StoreHeader /> <Background /></> : isloaded.header ? <Header /> : <></>
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
            <Suspense fallback={<Loading />}>
              <About onload={Footer3}/>
            </Suspense>
          }/>
          <Route  path="/Keroumi-V1/Protein" element={
            <Suspense fallback={<Background />}>
              <StorePage onload={Storeloading}/>
            </Suspense>
          }/>
          <Route path="/Keroumi-V1/Protein/Product-details" element={
            <Suspense fallback={<Alter />}>
                  <ProductDetails />
            </Suspense>
          } />
          <Route path="/keroumi-V1/Protein/Card" element={
            <Suspense fallback={<Alter />}>
              <Card />
            </Suspense>
          } />
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
        {
          currentpath === "/Keroumi-V1/Protein" || currentpath === "/Keroumi-V1/Protein/Product-details" || currentpath === "/keroumi-V1/Protein/Card" && isloaded.storeFooter ?  <StoreFooter /> : <></>
        }
       </shareProductDetails.Provider>
    </HideNav.Provider>

  );
}

export default App;
