import {React ,useState,useEffect} from 'react'
import pic1 from '../../pictures/pic1.jpeg'
import pic2 from '../../pictures/pic2.jpeg'
import pic3 from '../../pictures/pic3.jpeg'
import { motion } from 'framer-motion'

export const Section4 = () => {
    let [display,setdisplay] = useState(()=>{
        let initialWidth = window.innerWidth
        return{
            visible : initialWidth <= 1000 ? "hidden" : "visible"
        }
    })
    useEffect(
       function(){
        addEventListener("resize",function(){
            if(window.innerWidth <= 1000){
                setdisplay(function(prev){
                    return{
                        ...prev,
                        visible : "hidden"
                    }
                })
            }else{
                setdisplay(function(prev){
                    return{
                        ...prev,
                        visible : "visible"
                    }
                })
            }
        })
    
    },[window.innerWidth])
  return (
    <section className='w-full flex flex-col items-center md:items-start gap-10 md:flex-row justify-between relative top-[800px] small_tablet:top-52'>
        <nav className='flex flex-col gap-5'>
            <img src={pic1} alt="pic" className='topmove rounded-xl overflow-hidden  w-[330px] sm:w-[400px] small_tablet:w-[450px] relative left-0 small_tablet:left-6 object-cover pi'/>
            <img src={pic2} alt="pic" className={`${display.visible} topmovee small_tablet:visible pi self-center rounded-xl overflow-hidden  top-52 left-52 z-20 absolute object-cover`}/>
            <img src={pic3} alt="pic" className={`${display.visible} leftmove pi w-[320px] rounded-xl overflow-hidden relative  z-30 top-10 object-cover`}/>
         </nav>       
         <nav className='w-[80%] md:w-[40%] flex flex-col items-center gap-4 small_tablet:gap-7 relative right-0 small_tablet:right-12'>
            <div className=''>
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
                <motion.h1 viewport={{once:true}} initial={{left:"140px",opacity:0}} transition={{duration:1.3}} whileInView={{left:"0px",opacity:1}} className='text-white text-[18px] small_tablet:text-[40px] sm:text-[30px] font-bold uppercase relative'>Yassine Keroumi</motion.h1>
            </div>
            <motion.p viewport={{once:true}} initial={{opacity:0}} transition={{duration:3}} whileInView={{opacity:1}} className='text-white text-center text-sm sm:text-md'>
                Coach gym trainer, in Casablanca, I loved training all
                my life and tried everything I could - martial arts, team sports,
                indoor training, calisthenics - anything to challenge my comfort zone
                and my physical abilities. All these experiences have only given me
            </motion.p>
            <div className='flex justify-center gap-5'>
                <button className='text-white font-bold bg-gray-400 w-24 sm:w-36 h-10 rounded-md sh'>About Us</button>
                <a href="#Contact">
                <button className='text-white font-bold bg-orange-400 w-24 sm:w-36 h-10 rounded-md transition-all duration-500 hover:bg-white sh hover:text-orange-500 hover:scale-105'>Contact</button>
                </a>
            </div>
        </nav>

    </section>
  )
}
