import React from 'react'
import Data from './Data/Data'
import { motion } from 'framer-motion'

export const Galery = () => {
    let pics = Data.map(function(e){
        return(
            <motion.div initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} viewport={{once:true}} className='relative group'>
                <img src={e.pic} alt="pic" className="rounded-xl w-72 grayscale hover:sepia hover:grayscale-0 cursor-pointer duration-500 transition-all hover:scale-105 pi"/>
                <div className='absolute bottom-2 right-3 w-5 h-5 small_tablet:w-10 small_tablet:h-10 rounded-full bg-stone-500 justify-center items-center opacity-0 group-hover:opacity-100  flex transition-all duration-900 cursor-pointer hover:scale-105 '>
                    <i className="bi bi-plus-circle text-white text-[15px] small_tablet:text-[30px] mb-1"></i>
                </div>
            </motion.div>
        )
    })
  return (
    <article className='relative top-[2000px] small_tablet:top-96 flex flex-col items-center'>
        <div>
            <motion.div viewport={{once:true}} initial={{left:'-90px',opacity:0}} transition={{duration:1.4}} whileInView={{left:"0px",opacity:1}} className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21.033" height="21.472" viewBox="0 0 21.033 21.472">
                    <g id="Group_8" data-name="Group 8" transform="translate(234.373 -379.215) rotate(90)">
                        <rect id="Rectangle_4" data-name="Rectangle 4" width="21" height="20" transform="translate(379.687 213.425)" fill="rgba(255,255,255,0)"></rect>
                        <g id="Group_7" data-name="Group 7" transform="translate(380.238 213.34)">
                            <line id="Line_2" x1="20.432" transform="translate(0 19.533)" fill="none" stroke="#ff7400" stroke-width="3"></line>
                            <line id="Line_3" x2="20.01" transform="translate(0.477 20.01) rotate(-90)" fill="none" stroke="#ff7400" stroke-width="3"></line>
                        </g>
                    </g>
                </svg>
            </motion.div >
            <motion.h1 viewport={{once:true}} initial={{left:"140px",opacity:0}} transition={{duration:1.3}} whileInView={{left:"0px",opacity:1}}  className='text-white text-[18px] small_tablet:text-[40px] sm:text-[30px] font-bold relative'>Our Gallery</motion.h1>
        </div>
        <section className='w-full grid grid-cols-4 gap-5 place-items-center'>
            {pics}
        </section>
    </article>
    
  )
}
