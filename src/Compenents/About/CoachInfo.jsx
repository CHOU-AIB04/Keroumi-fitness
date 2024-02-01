import React from 'react'
import pic5 from '../../pictures/pic5.png'
import signature from '../../pictures/signature.png'
import { motion } from 'framer-motion'
export const CoachInfo = () => {
  return (
    <section className='w-full h-[450px]  mt-20 grid grid-cols-1 small_tablet:grid-cols-2 gap-20 place-items-center'>
        <motion.div initial={{left:"-120px"}} transition={{duration:1}} whileInView={{left:"0px"}} viewport={{once:true}} className='w-[70%] small_tablet:w-full h-full flex justify-center items-center relative aboutafter aboutbefore'>
            <img src={pic5} alt="pic" className=''/>
        </motion.div>
        <nav className='w-[90%] flex flex-col items-center gap-4'>
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
                    <motion.h1 viewport={{once:true}} initial={{left:"140px",opacity:0}} transition={{duration:1.3}} whileInView={{left:"0px",opacity:1}}  className='text-white text-[18px] small_tablet:text-[40px] sm:text-[30px] font-bold relative'>YASSIN KEROUMI</motion.h1>
            </div>
            <div className='flex flex-col gap-7 w-[60%] small_tablet:w-full h-full'>
                <motion.p initial={{left:"50px",opacity:0}} transition={{duration:1.3,delay:0.3}} whileInView={{left:"0px",opacity:1}} viewport={{once:true}}   className='text-white relative  text-sm small_tablet:text-md'> 
                    Coach & gym trainer, in Casablanca, I loved training all
                    my life and tried everything I could - martial arts, team sports,
                    indoor training, calisthenics - anything to challenge my comfort zone
                </motion.p>
                <motion.p initial={{left:"50px",opacity:0}} transition={{duration:1.3,delay:0.5}} whileInView={{left:"0px",opacity:1}} viewport={{once:true}}   className='text-white relative hidden small_tablet:block text-sm small_tablet:text-md'>
                    and my physical abilities. All these experiences have only given me
                    want to open this world of movement to others because it can really be
                    awesome.
                </motion.p>
                <motion.p initial={{left:"50px",opacity:0}} transition={{duration:1.3,delay:0.7}} whileInView={{left:"0px",opacity:1}} viewport={{once:true}}  className='text-white relative text-sm small_tablet:text-md '>
                    those who do not know how to pursue pleasure rationally encounter 
                    consequences that are extremely painful. Nor again is there anyone who loves or pursues 
                    or desires to obtain pain of itself, because it is pain, 
                    but because occasionally procure him some great pleasure.
                </motion.p>
                <div>
                    <img src={signature} alt="sign" className='w-[300px]' />
                </div>
            </div>  
        </nav>
</section>
  )
}
