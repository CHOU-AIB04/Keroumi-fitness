import {React,useState,useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
export const Section8 = () => {
    const [visible, setvisible] = useState(() => {
        const initialWidth = window.innerWidth;
        return {
          large: initialWidth > 900 ? 'visible' : 'hidden',
          medium: initialWidth <= 900 ? 'visible' : 'hidden',
          section: initialWidth <= 580 ? 'hidden' : 'visible',
        };
      });

    useLayoutEffect(function(){
        addEventListener('resize',function(){
            if(window.innerWidth <= 900){
                setvisible(function(prev){
                    return{
                        ...prev,
                        large : "hidden",
                        medium : "visible",
                        section : "visible"
                    }
                })
            }
            if(window.innerWidth <= 580){
                setvisible(function(prev){
                    return{
                        ...prev,
                        medium : "hidden",
                        section : "hidden"
                    }
                })
            }
            if(window.innerWidth > 900){
                setvisible(function(prev){
                    return{
                        ...prev,
                        large : "visible",
                        medium : "hidden",
                        section : "visible"
                    }
                })
            }
        })
    },[window.innerWidth])
  return (
   <section className={`w-full h-96 flex flex-col gap-10 items-center relative top-[3000px] sm:top-[2500px] small_tablet:top-[900px] ${visible.section}`}>
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
            <motion.h1 viewport={{once:true}} initial={{left:"140px",opacity:0}} transition={{duration:1.3}} whileInView={{left:"0px",opacity:1}} className='text-white text-[18px] small_tablet:text-[40px] sm:text-[30px] font-bold relative'>WORKING HOURS</motion.h1>
        </div>
        <motion.table className={`w-[95%] table-auto ${visible.large}`}>
                <tr className=''>
                    <th className='h-16 text-white w-[12%]'></th>
                    <th className='h-16 text-white'>MONDAY</th>
                    <th className='h-16 text-white'>TUESDAY</th>
                    <th className='h-16 text-white'>WEDNESDAY</th>
                    <th className='h-16 text-white'>THURSDAY</th>
                    <th className='h-16 text-white'>FRIDAY</th>
                    <th className='h-16 text-white'>SATURDAY</th>
                    <th className='h-16 text-white'>SUNDAY</th>
                </tr>
            
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>07:00 - 08:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>OPEN GYM</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={6}>OPEN GYM</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>OPEN GYM</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={3}>POWER LIFTING</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>OPEN GYM</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>08:00 - 09:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>08:00 - 09:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>POWER LIFTING</td>
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>09:00 - 10:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>10:00 - 11:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>OPEN GYM</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>OPEN GYM</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>OPEN GYM</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>11:00 - 12:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>12:00 - 13:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>OPEN GYM</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>13:00 - 14:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>14:00 - 15:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>POWER LIFTING</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>POWER LIFTING</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' rowSpan={2}>POWER LIFTING</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                </tr>
                <tr>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[15px] text-white'>15:00 - 16:00</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' ></td>
                    <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
                </tr>
        </motion.table>

        <motion.table  className={`table-auto w-[80%] ${visible.medium}`}>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>07:00 - 08:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>MONDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>OPEN GYM</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>TUESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>OPEN GYM</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>WEDNESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>OPEN GYM</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>THURSDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>POWER LIFTING</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>FRIDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>OPEN GYM</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>07:00 - 08:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>08:00 - 09:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>FRIDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>POWER LIFTING</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>09:00 - 10:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>WEDNESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>10:00 - 11:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>MONDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>OPEN GYM</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>TUESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>OPEN GYM</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>WEDNESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>OPEN GYM</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>11:00 - 12:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>12:00 - 13:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>MONDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>TUESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>OPEN GYM</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>WEDNESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>13:00 - 14:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>WEDNESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'></td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>14:00 - 15:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>MONDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>POWER LIFTING</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>TUESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>POWER LIFTING</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>WEDNESDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>POWER LIFTING</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white' colSpan={2}>15:00 - 16:00</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>MONDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
            </tr>
            <tr>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>THURSDAY</td>
                <td className='border-[1px] border-stone-500 h-16 w-[12%] text-center text-[20px] text-white'>CROSSFIT CLASS</td>
            </tr>
        </motion.table>
   </section>
  )
}
