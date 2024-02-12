import React from 'react'
import local from '../../pictures/local.png'
import phone from '../../pictures/phone.png'
import email from '../../pictures/email.png'
import hours from '../../pictures/hours.png'
import { motion } from "framer-motion";

export const Local = () => {
  return (
    <section className='mt-40 relative left-1/2 flex justify-between items-center -translate-x-1/2 w-[95%] flex-col tablet:flex-row gap-12 tablet:gap-0 md:gap-12'>
    <article className='w-[90%] tablet:w-[60%]'>
    <motion.iframe initial={{width:"0%"}} transition={{duration:1}} whileInView={{width:"100%"}} viewport={{once:true}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.3303094886437!2d-7.653383524987496!3d33.518796745710716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d6dd244cb17%3A0x28801a96349d1b60!2sKeroumi%20Fitness!5e0!3m2!1sen!2sma!4v1706776451498!5m2!1sen!2sma" 
        className='h-[400px] sm:h-[650px] rounded-xl mapsh' 
        style={{border:0}} allowfullscreen="" 
        loading="async." 
        referrerpolicy="no-referrer-when-downgrade">
    </motion.iframe>
    </article>
    <article className="w-[350px] tablet:w-[350px] md:w-full flex flex-col items-center tablet:items-center md:items-start ">
        <h1 className='text-[37px] text-white font-bold'>Contact</h1>
        <nav className='grid grid-cols-1 place-items-center tablet:grid-cols-1 md:grid-cols-2 self-center'>
            <motion.div initial={{opacity:0}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1}} viewport={{once:true}} className='flex  gap-10 l-3 relativr w-full h-[150px] items-center'>
                <div>
                    <img src={local} alt="local" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-bold'>LOCATION</h1>
                    <div>
                        <h2 className='text-white'>N 160 rue 40, Hay Al Wouroud,Casablanca 20280</h2>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{opacity:0}} transition={{duration:1,delay:0.4}} whileInView={{opacity:1}} viewport={{once:true}} className='flex  gap-10 w-full h-[150px] items-center'>
                <div>
                    <img src={phone} alt="local" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-bold'>PHONE</h1>
                    <div>
                        <h2 className='text-white'>+(212) 691 459 650</h2>
                        
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{opacity:0}} transition={{duration:1,delay:0.6}} whileInView={{opacity:1}} viewport={{once:true}} className='flex  gap-10 w-full h-[150px] items-center'>
                <div>
                    <img src={email} alt="local"/>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-bold'>EMAIL</h1>
                    <div>
                        <h2 className='text-white'>yassine@keroumifitness.com</h2>
                        <h2 className='text-white'>Info@keroumifitness.com</h2>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{opacity:0}} transition={{duration:1,delay:0.8}} whileInView={{opacity:1}} viewport={{once:true}} className='flex  gap-10 w-full h-[150px] items-center'>
                <div>
                    <img src={hours} alt="local" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-bold'>HOURS</h1>
                    <div>
                        <h2 className='text-white'>M-F 07H - 22H</h2>
                        <h2 className='text-white'>Sat 08H - 20H </h2>
                        <h2 className='text-white'>Sun 08H - 13H</h2>
                    </div>
                </div>
            </motion.div>
        </nav>
        
    </article>
   </section>
  )
}
