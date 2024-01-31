import React from 'react'
import pic1 from '../../pictures/pic4.png'
import pic2 from '../../pictures/pic5.png'
import { motion } from 'framer-motion'
export const Section6 = () => {
  return (
    <section className='w-[90%] h-96 flex flex-col items-center  relative top-[1700px] sm:top-[1200px] small_tablet:top-[410px]'>
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
                </motion.div>
                <motion.h1 viewport={{once:true}} initial={{left:"140px",opacity:0}} transition={{duration:1.3}} whileInView={{left:"0px",opacity:1}} className='text-white text-[18px] small_tablet:text-[40px] sm:text-[30px] font-bold relative'>OUR TRAINER</motion.h1>
            </div>
            <motion.nav viewport={{once:true}} initial={{gap:"150px",opacity:0}} transition={{duration:1}} whileInView={{gap:"0px",opacity:1}} className='grid grid-cols-1 small_tablet:grid-cols-3'>
               <div className='flex flex-col gap-6 items-center'>
                    <div className=' relative word cursor-pointer' value="ROBUST">
                        <img src={pic2} alt="pic" className='w-80'/>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <h1 className='text-white uppercase font-bold text-xl relative el'>ROBUST</h1>
                        <p className='text-gray-300'>Sturdy, Resilient Strength</p>
                    </div>
               </div>
               <div className='flex flex-col gap-6 items-center'>
                    <div className=' relative word cursor-pointer' value="MUSCULAR">
                        <img src={pic1} alt="pic" className='w-80'/>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <h1 className='text-white uppercase font-bold text-xl relative el'>MUSCULAR</h1>
                        <p className='text-gray-300'>Sculpted Athletic Power</p>
                    </div>
               </div>
               <div className='flex flex-col gap-6 items-center'>
                    <div className=' relative word cursor-pointer' value="POWERFUL">
                        <img src={pic2} alt="pic" className='w-80'/>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <h1 className='text-white uppercase font-bold text-xl relative el'>POWERFUL</h1>
                        <p className='text-gray-300'>Dominant Athletic Force</p>
                    </div>
               </div>

            </motion.nav>
    </section>
  )
}
