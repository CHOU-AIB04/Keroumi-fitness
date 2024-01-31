import React from 'react'
import { motion } from 'framer-motion'
export const Section2 = () => {
  return (
    <section id='Contact' className="h-[450px] relative -top-20 small_tablet:top-48  flex flex-col items-center justify-around w-[100%] sm:w-[80%] small_tablet:w-[60%] ">
        <div >
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
            <motion.div viewport={{once:true}} initial={{left:"140px",opacity:0}} transition={{duration:1.4}} whileInView={{left:"0px",opacity:1}} className='relative'>
                <h1 className='text-[20px] sm:text-[30px] small_tablet:text-[40px] font-bold text-white'>Remplissez le formulaire et </h1>
                <h1 className='text-[20px] sm:text-[30px] small_tablet:text-[40px] font-bold text-white'>profitez de l'offre de Coaching</h1>
            </motion.div>
            
        </div>
        <motion.form viewport={{once:true}}  initial={{top:"90px",gap:"40px" ,opacity:0}} transition={{duration:1.4}} whileInView={{top:"0px",gap:"0px" ,opacity:1}} className='w-4/5 h-[70%] relative flex flex-col justify-around'>
            <div className='w-full  flex flex-col'>
                <label className='text-stone-500'>Votre Nom</label>
                <input type="text" name="Nom" className='w-full h-10 rounded-3xl bg-zinc-600 focus:outline-none'  />
            </div>
            <div className='w-full  flex flex-col'>
                <label className='text-stone-500'>Votre Prenom</label>
                <input type="text" name="Prenom" className='w-full h-10 rounded-3xl bg-zinc-600 focus:outline-none'/>
            </div>
            <div className='w-full  flex flex-col'>
                <label className='text-stone-500'>Votre Message</label>
                <input type="text" name="Message" className='w-full h-10 rounded-3xl bg-zinc-600 focus:outline-none'/>
            </div>
            <button type="submit" className='relative top-3 self-end w-44 h-12 font-bold bg-orange-500 text-white rounded-xl transition-all duration-500 hover:scale-105 sh hover:bg-white hover:text-orange-500'>Envoyer</button>
        </motion.form> 
    </section>
  )
}
