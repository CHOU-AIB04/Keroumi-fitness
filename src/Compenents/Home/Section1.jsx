import React from "react";
import peace1 from "../../pictures/peace1.png"
import peace2 from "../../pictures/peace2.png"
import peace3 from "../../pictures/peace3.png"
import { motion } from "framer-motion";
export const Section1 = () => {
  return (
    <section className="h-[450px] mt-16 w-full flex-col small_tablet:flex-row flex justify-around items-center">
      <motion.div  viewport={{once:true}} initial={{left:"150px"}} transition={{duration:1}} whileInView={{left:"0px"}} className="small_tablet:flex flex-col gap-2 relative hidden">
        <i className="bi bi-facebook text-white text-xl cursor-pointer transition-all duration-500 hover:text-orange-600"></i>
        <i className="bi bi-twitter text-white text-xl cursor-pointer transition-all duration-500 hover:text-orange-600"></i>
        <i className="bi bi-instagram text-white text-xl cursor-pointer transition-all duration-500 hover:text-orange-600"></i>
        <i className="bi bi-linkedin text-white text-xl cursor-pointer transition-all duration-500 hover:text-orange-600"></i>
      </motion.div>
      <div className="w-[90%] h-full relative">
          <motion.div viewport={{once:true}}  initial={{width : "105%"}} transition={{duration:1}} whileInView={{width:"100%"}} className="absolute top-0 left-0">
            <img src={peace1} alt="pic" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div viewport={{once:true}}  initial={{width : "105%"}} transition={{duration:1}} whileInView={{width:"100%"}} className="absolute top-0 left-0">
            <img src={peace2} alt="pic" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div viewport={{once:true}}  initial={{width : "100%"}} transition={{duration:1}} whileInView={{width:"100%"}} className="absolute top-0 left-0">
            <img src={peace3} alt="pic" className="w-full h-full object-cover" />
          </motion.div>
      </div>
    
    </section>
  );
};
