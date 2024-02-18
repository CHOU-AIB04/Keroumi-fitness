import {React,useContext,useState} from "react";
import logo from '../../../pictures/logo_keroumi.png'
import { Link ,NavLink,useNavigate} from "react-router-dom";
import { HideNav } from "../../../Contexts/Hide-nav-context";
import Background from "../StoreBackground/Background";
import { shareProductDetails } from "../../../Contexts/ProductDetails";
 const StoreHeader =()=>{
  let {card} = useContext(shareProductDetails)
  let navigate = useNavigate()
  let [position ,setposition] = useState("relative")
  let {Hidenav} = useContext(HideNav)
  let {shownav} = useContext(HideNav)
  let {handle_click} = useContext(HideNav)
  let styles = {
    color : "orangered"
  }
  function CardConponent(){
    window.scrollTo({
      top:450,
      behavior:"smooth"
    })
  }
  return (
    <>
    <article className="w-[98%] h-32 top-4 relative left-1/2 -translate-x-1/2 flex flex-col rounded-md pi z-30">
      <section className="w-full h-[35%] bg-zinc-800 flex justify-center items-center  rounded-t-md">
        <div className="w-[340px] sm:w-[450px] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="bi bi-geo-alt text-[15px] sm:text-[20px] text-orange-500"></i>
            <h1 className="text-white font-bold text-sm sm:text-md">Casablanca</h1>
          </div>
          <span className="text-orange-500 text-sm sm:text-[23px]">//</span>
          <div className="flex items-center gap-2">
            <i className="bi bi-envelope text-[15px] sm:text-[20px] text-orange-500"></i>
            <h1 className="text-white font-bold text-sm sm:text-md">yassine@keroumifitness.com</h1>
          </div>
        </div>
      </section>
      <section className={`w-full h-[65%]  storecolor ${position} bottom-0 rounded-b-md`}>
        <nav className="w-[95%] bg-orange-300 relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Link to="/Keroumi-fitness/Store">
                <div className="absolute top-1/2 -translate-y-1/2 left-3">
                    <img src={logo} alt="logo" className="w-[130px] sm:w-[180px] small_tablet:w-[200px]"/>
                </div>
            </Link>
            
            <nav className={`${shownav.opacity} bg-zinc-700 store:bg-transparent flex items-start store:items-center rounded-md pl-7 store:pl-0 gap-7  h-[200px] store:h-auto justify-between flex-col store:flex-row store:visible absolute left-1/2 -translate-x-1/2 top-1/2 mt-36 ml-3 store:ml-0 store:mt-0 w-full store:w-auto -translate-y-1/2`}>
                <ul className="flex w-[225px] h-[40%] store:h-auto justify-between flex-col store:flex-row mt-3 store:mt-0">
                    <li className="text-white text-sm transition-colors duration-500 hover:text-orange-500 cursor-pointer" onClick={Hidenav}><NavLink to="Keroumi-fitness/" end style={({isActive})=> isActive ? styles : null}>Coaching</NavLink></li>
                    <li className="text-white text-sm transition-colors duration-500 hover:text-orange-500 cursor-pointer" onClick={Hidenav}><NavLink to="/Keroumi-fitness/Store" end style={({isActive})=> isActive ? styles : null}>Proteines<span> & </span>Produits</NavLink></li>
                </ul>
                <div className="bg-white rounded-md overflow-hidden w-[240px] store:w-[300px] h-9 mb-3 store:mb-0">
                    <i className="bi bi-search text-gray-600 ml-1"></i>
                    <input type="text" placeholder="Rechercher des produit..." className="h-full pl-2 focus:outline-none"/>
                </div>
            </nav>
            <button className="h-9 small_tablet:h-11 w-24 small_tablet:w-36 text-white font-bold cursor-pointer transition-all duration-500 hover:text-orange-500 hover:bg-white hover:scale-105 bg-orange-500 rounded-xl absolute right-9 store:right-0 top-1/2 -translate-y-1/2">Protein</button>
        </nav>
        <NavLink to="/Keroumi-fitness/Store/cart" end>
          <div className="flex pl-2 absolute top-1/2 -translate-y-1/2 right-[40%] sm:right-[35%]  store:right-[19%]" onClick={CardConponent}>
              <i className="bi bi-cart text-white text-[30px] sm:text-[35px] transition-colors duration-500 hover:text-orange-500 cursor-pointer"></i>
              <p className="bg-orange-500 rounded-full self-start w-6 text-center relative right-3">{card.length}</p>
          </div>
        </NavLink>
        <i className={`${shownav.icon} text-white text-[30px] cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 visible store:invisible transition-colors duration-500 hover:text-orange-500`} onClick={handle_click}></i>
      </section>
    </article>
    </>
  );
};
export default StoreHeader