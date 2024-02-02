import React from "react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  return (
    <section className="w-[95%]  h-96  flex flex-col small_tablet:flex-row items-center justify-between relative left-1/2 -translate-x-1/2 top-28 gap-12 small_tablet:gap-0 ">
      <form className="w-full small_tablet:w-[60%] flex flex-col justify-between gap-7">
        <motion.div initial={{opacity:0}} transition={{duration:1,delay:0.1}} whileInView={{opacity:1}} viewport={{once:true}}  className="flex flex-col gap-1">
          <label className="text-gray-700 text-xl font-bold">Votre Nom</label>
          <input type="text"  className="h-16 rounded-3xl inputcol pl-3 text-white focus:outline-none"/>
        </motion.div>
        <motion.div initial={{opacity:0}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1}} viewport={{once:true}}  className="flex flex-col gap-1">
          <label className="text-gray-700 text-xl font-bold ">Votre Phone</label>
          <input type="text"  className="h-16 rounded-3xl inputcol pl-3 text-white focus:outline-none"/>
        </motion.div>
        <motion.div initial={{opacity:0}} transition={{duration:1,delay:0.3}} whileInView={{opacity:1}} viewport={{once:true}}  className="flex flex-col gap-1">
          <label className="text-gray-700 text-xl font-bold ">Votre Message</label>
          <input type="text"  className="h-16 rounded-3xl inputcol pl-3 text-white focus:outline-none"/>
        </motion.div>
        <motion.button initial={{opacity:0}} transition={{duration:1,delay:0.4}} whileInView={{opacity:1}} viewport={{once:true}}  className="h-12 w-44 self-center sm:self-start text-white font-bold cursor-pointer transition-all duration-500 hover:text-orange-500 hover:bg-white hover:scale-105 bg-orange-500 rounded-xl">Envoyer</motion.button>
      </form>
      <nav className="w-full small_tablet:w-[27%] flex flex-col gap-4 items-center small_tablet:items-start">
        <h1 className="text-white font-bold text-[20px] sm:text-[30px] text-center sm:text-start">You can stay in touch with us this way</h1>
        <div className="flex items-center gap-4">
            <i className="bi bi-facebook text-gray-400 text-[25px] transition-all duration-500 hover:scale-105 hover:text-orange-500 cursor-pointer"></i>
            <i className="bi bi-instagram text-gray-400 text-[25px] transition-all duration-500 hover:scale-105 hover:text-orange-500 cursor-pointer"></i>
            <i className="bi bi-telegram text-gray-400 text-[25px] transition-all duration-500 hover:scale-105 hover:text-orange-500 cursor-pointer"></i>
        </div>
      </nav>
    </section>
  );
};
