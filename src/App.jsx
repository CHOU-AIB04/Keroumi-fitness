import { useState,lazy,Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, json } from 'react-router-dom';
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
import Effect from "./Compenents/Move_Effect/Effect";
import Description from "./Compenents/Store_Part/ProductDetail/Description/Description";
import Comment from "./Compenents/Store_Part/ProductDetail/Comment/Comment";
import NotFound from "./Compenents/PagenotFound/NotFound";
import { Toaster } from "react-hot-toast";
import Checkout from "./Compenents/Store_Part/Checkout/Checkout";
const StorePage = lazy(()=>import('./Compenents/Store_Part/Store_Page/StorePage'))
const Footer = lazy(()=>import('./Compenents/Footer/Footer'))
const Home = lazy(()=> import('./Compenents/Home/Home'))
const Contact = lazy(()=> import('./Compenents/Contact/Contact'))
const About = lazy(()=> import('./Compenents/About/About'))
const ProductDetails = lazy(()=> import('./Compenents/Store_Part/ProductDetail/ProductDetails')) ;
const Card = lazy(()=>import('./Compenents/Store_Part/Card/Card'))
const Store = lazy(()=> import("./Compenents/Store_Part/Store_Page/Store"));
Store
function App() {
            //  this state it's for the card conponent 
  let [card,setcard] = useState([])

  // this useeffect it's for get the cardarray from the local storage and set it in usestate
  useEffect(()=>{
    let storeddata = localStorage.getItem("arr")
    if (storeddata){
      setcard(JSON.parse(storeddata))
    }
  },[])
                 // this usestate it takes the current value that exist in local storage 
  let [selecteditem , setselecteditem] = useState(()=>{
    let currentproduct = window.localStorage.getItem("currentproduct")
    return currentproduct ? parseInt(currentproduct) : 1
  })
  // this usestate it's for taking a value from L.S that contain sum of card product
  let [cardtot,setcardtot] = useState(()=>{
    let localtot = window.localStorage.getItem("total")
    return localtot ? localtot : 0
  })
  // this usestate it's applying Promo Code
  let [promocode,setpromocode] = useState(cardtot)
  // this useeffect it's for inital an item in the L.S to add on it some calcul if L.S.length <= 2 
  useEffect(()=>{
    window.localStorage.setItem("total","")
    window.localStorage.setItem("arr",[])
    window.localStorage.setItem("currentproduct","")
  },[])
  let [isloaded,setisloaded] = useState({
    footer1: false,
    footer2: false,
    footer3: false,
    header : false,
    storeHeader : false,
    storeFooter: false
  })
  let storePaths = [
    "/Keroumi-fitness/Store",
    "/Keroumi-fitness/Store/Product-details",
    "/Keroumi-fitness/Store/cart",
    "/Keroumi-fitness/Store/Product-details",
    "/Keroumi-fitness/Store/Checkout",
  ]
  let location = useLocation()
  let storepath = storePaths.includes(location.pathname)
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
  document.body.style.backgroundColor = storepath ? "#191918" : "black"
  return (
    <HideNav.Provider value={{ shownav, setshownav, Hidenav,handle_click,scroll,storepath}}>
    <shareProductDetails.Provider value={{selecteditem,setselecteditem,card,setcard,cardtot,setcardtot,promocode,setpromocode}}>
        <div><Toaster position="top-right" reverseOrder={true}/></div>
        {
          storepath  &&  isloaded.storeHeader ? <><StoreHeader /> <Background /></> : isloaded.header ? <Header /> : <></>
        }
        <Routes>
          <Route path="Keroumi-fitness/" element={
            <Suspense fallback={<Loading/>}>
              <Home onload={Footer1}/>
            </Suspense>
          }/>
          <Route path="*" element={<NotFound />}/>
          <Route path="Keroumi-fitness/Contact" element={
            <Suspense fallback={<Loading />}>
              <Contact onload={Footer2}/>
            </Suspense>
          } />
          <Route path="Keroumi-fitness/About" element={
            <Suspense fallback={<Loading />}>
              <About onload={Footer3}/>
            </Suspense>
          }/>
          <Route  path="/Keroumi-fitness/Store" element={
            <Suspense fallback={<Loading />}>
              <Store onload={Storeloading}/>
            </Suspense>}>
            <Route path="" element={
              <Suspense fallback={<Alter />}>
                    <StorePage onload={Storeloading}/>
              </Suspense>
            }/>
            <Route path="Product-details" element={
              <Suspense fallback={<Alter />}>
                    <ProductDetails onload={Storeloading}/>
              </Suspense>}
            />
            <Route path="cart" element={
              <Suspense fallback={<Alter />}>
                <Card onload={Storeloading}/>
              </Suspense> 
            } />
            <Route path="Checkout" element={
              <Suspense fallback={<Alter />}>
                <Checkout onload={Storeloading}/>
              </Suspense> 
            } />
          </Route>
          
        </Routes>
        <Scroll />
        {
          currentpath === "/Keroumi-fitness/"  && isloaded.footer1 ? 
          <Suspense>
            <Footer footer_responsive ="sm:top-[4100px] top-[2950px] small_tablet:top-[1400px]"/>
          </Suspense> : <></>
        }
        {
          currentpath === "/Keroumi-fitness/Contact" && isloaded.footer2 ? 
          <Suspense>
            <Footer footer_responsive="top-[400px] small_tablet:top-[200px]" />
          </Suspense> : <></>
        }
        {
          currentpath === "/Keroumi-fitness/About"  && isloaded.footer3 ? 
          <Suspense>
            <Footer footer_responsive="top-[2100px] small_tablet:top-[500px]"/>
          </Suspense> : <></>
        }
        {
          storepath && isloaded.storeFooter ?  <StoreFooter /> : <></>
        }
       </shareProductDetails.Provider>
    </HideNav.Provider>

  );
}

export default App;
