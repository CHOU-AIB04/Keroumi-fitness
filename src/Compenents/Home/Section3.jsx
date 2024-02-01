import React from 'react'
import { motion } from 'framer-motion'

export const Section3 = (props) => {
  return (
        <section className='h-96 pt-4 relative w-[95%]  small_tablet:top-52'>
            {
                props.visible ? 
                <div className='absolute left-1/2 -translate-x-1/2'>
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
                <motion.h1 viewport={{once:true}} initial={{left:"140px",opacity:0}} transition={{duration:1.3}} whileInView={{left:"0px",opacity:1}}  className='text-white text-[18px] small_tablet:text-[40px] sm:text-[30px] font-bold relative'>WHY CHOOSE US</motion.h1>
            </div> : <></>
            }
            <motion.nav viewport={{once:true}} initial={{gap:"300px",opacity:0}} transition={{duration:1}} whileInView={{gap:"24px",opacity:1}} className='h-4/5 grid grid-cols-1 place-items-center small_tablet:grid-cols-3 relative top-24'>
                <div className='h-72 w-[280px]  tablet:w-[340px] bg-orange-500 flex justify-center items-center rounded-md sh hover:scale-105 cursor-pointer transition-all duration-500'>
                    <div className='w-[90%] h-4/5 relative top-5 flex flex-col justify-between'>
                        <div>
                            {props.svg1}
                        </div>
                        <h1 className='font-bold text-white text-[30px]'>{props.tittle1}</h1>
                        <p className='text-white text-md'>{props.des1}</p>
                        <div className='self-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.033" height="21.472" viewBox="0 0 21.033 21.472">
                                <g id="Group_8" data-name="Group 8" transform="translate(234.373 -379.215) rotate(90)">
                                    <rect id="Rectangle_4" data-name="Rectangle 4" width="21" height="20" transform="translate(379.687 213.425)" fill="rgba(255,255,255,0)"></rect>
                                    <g id="Group_7" data-name="Group 7" transform="translate(380.238 213.34)">
                                        <line id="Line_2" x1="20.432" transform="translate(0 19.533)" fill="none" stroke="#fff" stroke-width="3"></line>
                                        <line id="Line_3" x2="20.01" transform="translate(0.477 20.01) rotate(-90)" fill="none" stroke="#fff" stroke-width="3"></line>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='h-72 w-[280px]  tablet:w-[340px] sh bg-black border-1 border-white transition-all duration-500 hover:bg-orange-500 flex justify-center items-center rounded-md hover:scale-105 cursor-pointer'>
                    <div className='w-[90%] h-4/5 relative top-5 flex flex-col justify-between'>
                        <div>
                           {props.svg2}
                        </div>
                        <h1 className='font-bold text-white text-[30px]'>{props.tittle2}</h1>
                        <p className='text-white text-md'>{props.des2}</p>
                        <div className='self-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.033" height="21.472" viewBox="0 0 21.033 21.472">
                                <g id="Group_8" data-name="Group 8" transform="translate(234.373 -379.215) rotate(90)">
                                    <rect id="Rectangle_4" data-name="Rectangle 4" width="21" height="20" transform="translate(379.687 213.425)" fill="rgba(255,255,255,0)"></rect>
                                    <g id="Group_7" data-name="Group 7" transform="translate(380.238 213.34)">
                                        <line id="Line_2" x1="20.432" transform="translate(0 19.533)" fill="none" stroke="#fff" stroke-width="3"></line>
                                        <line id="Line_3" x2="20.01" transform="translate(0.477 20.01) rotate(-90)" fill="none" stroke="#fff" stroke-width="3"></line>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='h-72 w-[280px]  tablet:w-[340px] sh hover:scale-105 cursor-pointer bg-black border-1 border-white transition-all duration-500 hover:bg-orange-500 flex justify-center items-center rounded-md'>
                    <div className='w-[90%] h-4/5 relative top-5 flex flex-col justify-between'>
                        <div>
                            {props.svg3}
                        </div>
                        <h1 className='font-bold text-white text-[30px]'>{props.tittle3}</h1>
                        <p className='text-white text-md'>{props.des3}</p>
                        <div className='self-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.033" height="21.472" viewBox="0 0 21.033 21.472">
                                <g id="Group_8" data-name="Group 8" transform="translate(234.373 -379.215) rotate(90)">
                                    <rect id="Rectangle_4" data-name="Rectangle 4" width="21" height="20" transform="translate(379.687 213.425)" fill="rgba(255,255,255,0)"></rect>
                                    <g id="Group_7" data-name="Group 7" transform="translate(380.238 213.34)">
                                        <line id="Line_2" x1="20.432" transform="translate(0 19.533)" fill="none" stroke="#fff" stroke-width="3"></line>
                                        <line id="Line_3" x2="20.01" transform="translate(0.477 20.01) rotate(-90)" fill="none" stroke="#fff" stroke-width="3"></line>
                                    </g>
                                </g>
                            </svg>
                        </div>

                    </div>
                </div>
            </motion.nav>
        </section>
  )
}
