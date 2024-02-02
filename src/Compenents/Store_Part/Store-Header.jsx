import React from "react";
import logo from '../../pictures/logo_keroumi.png'
import { Link } from "react-router-dom";
export const StoreHeader = () => {
  return (
    <article className="w-[98%] h-32 top-4 relative left-1/2 -translate-x-1/2 rounded-md flex flex-col overflow-hidden">
      <section className="w-full h-[35%]  bg-gray-700 flex justify-center items-center">
        <div className="w-[450px] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="bi bi-geo-alt text-[15px] sm:text-[20px] text-orange-500"></i>
            <h1 className="text-white font-bold">Casablanca</h1>
          </div>
          <span className="text-orange-500 text-sm sm:text-[23px]">//</span>
          <div className="flex items-center gap-2">
            <i className="bi bi-envelope text-[15px] sm:text-[20px] text-orange-500"></i>
            <h1 className="text-white font-bold text-sm sm:text-md">yassine@keroumifitness.com</h1>
          </div>
        </div>
      </section>
      <section className="w-full h-[65%]  bg-gray-800 relative">
        <nav className="w-[95%] bg-orange-300 relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Link to="/Keroumi-V1/Protein">
                <div className="absolute top-1/2 -translate-y-1/2 left-3">
                    <img src={logo} alt="logo" className="w-[130px] sm:w-[180px] small_tablet:w-[200px]"/>
                </div>
            </Link>
            
            <nav className="flex items-center gap-7 invisible store:visible absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <ul className="flex w-[225px] justify-between ">
                    <Link to="Keroumi-V1/"><li className="text-white transition-colors duration-500 hover:text-orange-500 cursor-pointer">Coaching</li></Link>
                    <Link to="/Keroumi-V1/Protein"><li className="text-white transition-colors duration-500 hover:text-orange-500 cursor-pointer">Proteines<span> & </span>Produits</li></Link>
                </ul>
                <div className="bg-white rounded-md overflow-hidden w-[300px] pl-2 h-9">
                    <i className="bi bi-search text-gray-600"></i>
                    <input type="text" placeholder="Rechercher des produit..." className="h-full pl-2 focus:outline-none"/>
                </div>
            </nav>
            <button className="h-9 sm:h-11 w-24 sm:w-36 text-white font-bold cursor-pointer transition-all duration-500 hover:text-orange-500 hover:bg-white hover:scale-105 bg-orange-500 rounded-xl absolute right-0 top-1/2 -translate-y-1/2">Protein</button>
        </nav>
        <i className="bi bi-cart text-white text-[30px] sm:text-[35px] transition-all duration-500 hover:text-orange-500 cursor-pointer absolute top-1/2 -translate-y-1/2 right-[35%] sm:right-[30%] small_tablet:right-[19%]"></i>
      </section>
    </article>
  );
};
