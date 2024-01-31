import React from 'react'
import { motion } from 'framer-motion'
export const Section5 = () => {
  return (
    <section className='flex flex-col items-center justify-between w-[95%] h-[500px] relative top-[900px] small_tablet:top-[350px]'>
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
        <motion.nav viewport={{once:true}}  initial={{gap:"300px",opacity:0}} transition={{duration:1}} whileInView={{gap:"24px",opacity:1}} className='h-[70%] w-full grid grid-cols-1 sm:grid-cols-2 small_tablet:grid-cols-4 gap-2'>
            <div className='w-full h-full bg-black border-[1px] rounded-2xl sh border-gray-300 transition-all duration-500 hover:scale-105 cursor-pointer hover:bg-orange-500 flex justify-center items-center'>
                <div className='w-[70%] h-[100%]  flex flex-col items-center justify-between'>
                    <div className='self-end relative right-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50.323" height="78" viewBox="0 0 50.323 78">
                            <g id="fit" transform="translate(-12 -1)">
                                <path id="Path_7054" d="M58.29,51.554V23.645A21.215,21.215,0,0,0,49.6,6.439a17.542,17.542,0,0,0-25.394,0,21.22,21.22,0,0,0-8.691,17.208V51.554A3.769,3.769,0,0,0,13,55.1v2.516h2.516V55.1a1.258,1.258,0,1,1,2.516,0v2.516h2.516V55.1a3.769,3.769,0,0,0-2.516-3.543V23.645a18.947,18.947,0,0,1,1.4-7.148,17.607,17.607,0,1,0,35.086,2.116,17.809,17.809,0,0,0-.14-2.117,18.953,18.953,0,0,1,1.4,7.15V51.554A3.769,3.769,0,0,0,53.258,55.1v2.516h2.516V55.1a1.258,1.258,0,0,1,2.516,0v2.516h2.516V55.1a3.769,3.769,0,0,0-2.516-3.543ZM36.9,3.516A11.323,11.323,0,1,1,25.581,14.839,11.336,11.336,0,0,1,36.9,3.516Zm0,30.194A15.064,15.064,0,0,1,23.368,11.968a13.839,13.839,0,1,0,27.071,0A15.064,15.064,0,0,1,36.9,33.71Z" transform="translate(0.258)" fill="#fff"></path>
                                <path class="svg-bac3" id="Path_7055" d="M17.032,67.645A5.037,5.037,0,0,1,12,62.613V45H22.065V62.613A5.037,5.037,0,0,1,17.032,67.645Z" transform="translate(0 11.355)" fill="#ff7400"></path>
                                <path id="Path_7056" d="M12,49H22.065v2.516H12Z" transform="translate(0 12.387)" fill="#fff"></path>
                                <path id="Path_7057" d="M12,53H22.065v2.516H12Z" transform="translate(0 13.419)" fill="#fff"></path>
                                <path id="Path_7058" d="M12,57H22.065v2.516H12Z" transform="translate(0 14.452)" fill="#fff"></path>
                                <path class="svg-bac3" id="Path_7059" d="M49.032,67.645A5.037,5.037,0,0,1,44,62.613V45H54.065V62.613A5.037,5.037,0,0,1,49.032,67.645Z" transform="translate(8.258 11.355)" fill="#ff7400"></path>
                                <path id="Path_7060" d="M44,49H54.065v2.516H44Z" transform="translate(8.258 12.387)" fill="#fff"></path>
                                <path id="Path_7061" d="M44,53H54.065v2.516H44Z" transform="translate(8.258 13.419)" fill="#fff"></path>
                                <path id="Path_7062" d="M44,57H54.065v2.516H44Z" transform="translate(8.258 14.452)" fill="#fff"></path>
                            </g>
                        </svg>     
                    </div>
                    <h1 className='font-bold text-white text-[37px]'>1 Month</h1>
                    <h1 className='font-bold text-white text-[37px]'>200</h1>
                    <h1 className='font-bold text-white text-[37px]'>MAD</h1>
                    <div className='self-start '>
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
            <div className='w-full h-full bg-black border-[1px] rounded-2xl sh border-gray-300 transition-all duration-500 hover:scale-105 cursor-pointer hover:bg-orange-500 flex justify-center items-center'>
                <div className='w-[70%] h-[100%]  flex flex-col items-center justify-between'>
                    <div className='self-end relative right-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55.355" height="78" viewBox="0 0 55.355 78">
                            <g id="roller" transform="translate(0 78) rotate(-90)">
                                <path id="Path_29" d="M13.839,0H0V2.516H3.774V7.548H0v2.516H13.839A5.032,5.032,0,1,0,13.839,0Zm0,7.548H6.29V2.516h7.548a2.516,2.516,0,1,1,0,5.032Z" transform="translate(59.129 22.645)" fill="#fff"></path>
                                <path id="Path_30" d="M18.871,2.516V0H5.032a5.032,5.032,0,1,0,0,10.065H18.871V7.548H15.1V2.516Zm-6.29,5.032H5.032a2.516,2.516,0,1,1,0-5.032h7.548Z" transform="translate(0 22.645)" fill="#fff"></path>
                                <path class="svg-bac2" id="Path_31" d="M5.032,0H0V22.645H5.032a3.779,3.779,0,0,0,3.774-3.774V3.774A3.779,3.779,0,0,0,5.032,0Z" transform="translate(51.581 16.355)" fill="#ff7400"></path>
                                <path class="svg-bac2" id="Path_32" d="M8.806,0H3.774A3.779,3.779,0,0,0,0,3.774v15.1a3.779,3.779,0,0,0,3.774,3.774H8.806Z" transform="translate(17.613 16.355)" fill="#ff7400"></path>
                                <path id="Path_33" d="M0,0H3.558V2.516H0Z" transform="translate(43.136 12.951) rotate(-45)"></path>
                                <path id="Path_34" d="M0,0H3.558V2.516H0Z" transform="translate(43.134 20.499) rotate(-45)" fill="#fff"></path>
                                <path id="Path_35" d="M0,0H3.558V2.516H0Z" transform="translate(43.134 28.047) rotate(-45)"></path>
                                <path id="Path_36" d="M0,0H3.558V2.516H0Z" transform="translate(43.133 35.594) rotate(-45)"></path>
                                <path id="Path_37" d="M0,0H3.558V2.516H0Z" transform="translate(43.132 43.141) rotate(-45)" fill="#fff"></path>
                                <path id="Path_38" d="M0,0H2.516V3.558H0Z" transform="translate(30.556 12.214) rotate(-45)"></path>
                                <path id="Path_39" d="M0,0H2.516V3.558H0Z" transform="translate(30.555 19.761) rotate(-45)" fill="#fff"></path>
                                <path id="Path_40" d="M0,0H2.516V3.558H0Z" transform="translate(30.555 27.309) rotate(-45)"></path>
                                <path id="Path_41" d="M0,0H2.516V3.558H0Z" transform="translate(30.554 34.856) rotate(-45)"></path>
                                <path id="Path_42" d="M0,0H2.516V3.558H0Z" transform="translate(30.552 42.403) rotate(-45)" fill="#fff"></path>
                                <path id="Path_43" d="M20.129,0a7.546,7.546,0,0,0-6.29,3.384A7.545,7.545,0,0,0,0,7.548V47.806a7.545,7.545,0,0,0,13.839,4.164,7.545,7.545,0,0,0,13.839-4.164V7.548A7.556,7.556,0,0,0,20.129,0ZM7.548,52.839a5.037,5.037,0,0,1-5.032-5.032V7.548a5.032,5.032,0,0,1,10.065,0V47.806A5.037,5.037,0,0,1,7.548,52.839Zm17.613-5.032a5.032,5.032,0,1,1-10.065,0V7.548a5.032,5.032,0,1,1,10.065,0Z" transform="translate(25.161)" fill="#fff"></path>
                            </g>
                        </svg>
                    </div>
                    <h1 className='font-bold text-white text-[37px]'>3 Month</h1>
                    <h1 className='font-bold text-white text-[37px]'>500</h1>
                    <h1 className='font-bold text-white text-[37px]'>MAD</h1>
                    <div className='self-start '>
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

            <div className='w-full h-full bg-black border-[1px] rounded-2xl sh border-gray-300 transition-all duration-500 hover:scale-105 cursor-pointer hover:bg-orange-500 flex justify-center items-center'>
                <div className='w-[70%] h-[100%]  flex flex-col items-center justify-between'>
                    <div className='self-end relative right-4'>
                        <svg id="gym" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78">
                            <path id="Path_44" d="M33.758,15.774H27.483A9.711,9.711,0,0,0,19.787,12h-.5a6.29,6.29,0,1,0,0,12.581h2.833l6.025,20.484,2.413-.71L24.745,24.581h2.41l6.025,20.484,2.413-.71L29.778,24.581h3.981a4.4,4.4,0,1,0,0-8.806Zm0,6.29H19.29a3.774,3.774,0,1,1,0-7.548h.5a7.2,7.2,0,0,1,6,3.214l.374.56h7.592a1.887,1.887,0,0,1,0,3.774Z" transform="translate(2.097 1.839)" fill="#fff"></path>
                            <path id="Path_45" d="M61.161,1a3.779,3.779,0,0,0-3.774,3.774v7.548a3.77,3.77,0,0,0,2.454,3.523,8.817,8.817,0,0,1-4.971,6.938V17.965a8.748,8.748,0,0,0-2.58-6.227l-.673-.673.845-.845a3.927,3.927,0,0,0-2.777-6.7,3.953,3.953,0,0,0-2.777,1.15l-9.76,9.76a3.927,3.927,0,0,0,2.777,6.7,3.953,3.953,0,0,0,2.777-1.15l2.685-2.685a3.794,3.794,0,0,1,.677,2.145V47.548h2.516V26.161H51.1a11.24,11.24,0,0,0,1.258-.074V50.065h2.516V25.5a11.339,11.339,0,0,0,7.5-9.619,3.767,3.767,0,0,0,2.569-3.559V4.774A3.779,3.779,0,0,0,61.161,1ZM40.924,18.2a1.411,1.411,0,0,1-2.408-1,1.4,1.4,0,0,1,.413-1l9.76-9.76a1.411,1.411,0,0,1,2.408,1,1.4,1.4,0,0,1-.413,1ZM51.1,23.645H48.581V19.439a6.229,6.229,0,0,0-1.413-3.925l2.671-2.671.673.674a6.248,6.248,0,0,1,1.843,4.447v5.58A8.839,8.839,0,0,1,51.1,23.645ZM62.419,12.323a1.258,1.258,0,0,1-2.516,0V4.774a1.258,1.258,0,1,1,2.516,0Z" transform="translate(8.032 -1)" fill="#fff"></path>
                            <path class="svg-bac3" id="Path_46" d="M54.032,37H21.323A11.336,11.336,0,0,0,10,48.323v15.1H65.355v-15.1A11.336,11.336,0,0,0,54.032,37ZM37.677,53.355a5.032,5.032,0,1,1,5.032-5.032A5.032,5.032,0,0,1,37.677,53.355Z" transform="translate(1.323 8.29)" fill="#ff7400"></path>
                            <path id="Path_47" d="M75.226,58.806H72.71V53.774A3.779,3.779,0,0,0,68.935,50H67.677v2.516h1.258a1.259,1.259,0,0,1,1.258,1.258v5.032H9.806V53.774a1.259,1.259,0,0,1,1.258-1.258h1.258V50H11.065A3.779,3.779,0,0,0,7.29,53.774v5.032H4.774a3.774,3.774,0,0,0,0,7.548H75.226a3.774,3.774,0,1,0,0-7.548Zm0,5.032H4.774a1.258,1.258,0,1,1,0-2.516H75.226a1.258,1.258,0,1,1,0,2.516Z" transform="translate(-1 11.645)" fill="#fff"></path>
                            <path id="Path_48" d="M51.29,49.806H48.774V47.29A3.779,3.779,0,0,0,45,43.516V41a6.3,6.3,0,0,1,6.29,6.29Z" transform="translate(10.355 9.323)" fill="#fff"></path>
                            <path id="Path_49" d="M39.1,56.1l-1.942-3.884a6.523,6.523,0,1,0-2.248,1.13l2.636,5.27h5.81V56.1Zm-5.81-5.032A3.793,3.793,0,1,1,36,49.9l-1.588-3.175-2.251,1.126,1.583,3.165a3.9,3.9,0,0,1-.457.045Z" transform="translate(5.71 9.323)" fill="#fff"></path>
                            <path id="Path_50" d="M48,50h2.516v2.516H48Z" transform="translate(11.129 11.645)" fill="#fff"></path>
                            <path id="Path_51" d="M34.323,57.323A11.336,11.336,0,0,1,23,46h2.516a8.817,8.817,0,0,0,8.806,8.806Z" transform="translate(4.677 10.613)" fill="#fff"></path>
                        </svg>
                    </div>
                    <h1 className='font-bold text-white text-[37px]'>6 Month</h1>
                    <h1 className='font-bold text-white text-[37px]'>900</h1>
                    <h1 className='font-bold text-white text-[37px]'>MAD</h1>
                    <div className='self-start '>
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

            <div className='w-full h-full bg-black border-[1px] rounded-2xl sh border-gray-300 transition-all duration-500 hover:scale-105 cursor-pointer hover:bg-orange-500 flex justify-center items-center'>
                <div className='w-[70%] h-[100%]  flex flex-col items-center justify-between'>
                    <div className='self-end relative right-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50.323" height="78" viewBox="0 0 50.323 78">
                            <g id="fit" transform="translate(-12 -1)">
                                <path id="Path_7054" d="M58.29,51.554V23.645A21.215,21.215,0,0,0,49.6,6.439a17.542,17.542,0,0,0-25.394,0,21.22,21.22,0,0,0-8.691,17.208V51.554A3.769,3.769,0,0,0,13,55.1v2.516h2.516V55.1a1.258,1.258,0,1,1,2.516,0v2.516h2.516V55.1a3.769,3.769,0,0,0-2.516-3.543V23.645a18.947,18.947,0,0,1,1.4-7.148,17.607,17.607,0,1,0,35.086,2.116,17.809,17.809,0,0,0-.14-2.117,18.953,18.953,0,0,1,1.4,7.15V51.554A3.769,3.769,0,0,0,53.258,55.1v2.516h2.516V55.1a1.258,1.258,0,0,1,2.516,0v2.516h2.516V55.1a3.769,3.769,0,0,0-2.516-3.543ZM36.9,3.516A11.323,11.323,0,1,1,25.581,14.839,11.336,11.336,0,0,1,36.9,3.516Zm0,30.194A15.064,15.064,0,0,1,23.368,11.968a13.839,13.839,0,1,0,27.071,0A15.064,15.064,0,0,1,36.9,33.71Z" transform="translate(0.258)" fill="#fff"></path>
                                <path class="svg-bac3" id="Path_7055" d="M17.032,67.645A5.037,5.037,0,0,1,12,62.613V45H22.065V62.613A5.037,5.037,0,0,1,17.032,67.645Z" transform="translate(0 11.355)" fill="#ff7400"></path>
                                <path id="Path_7056" d="M12,49H22.065v2.516H12Z" transform="translate(0 12.387)" fill="#fff"></path>
                                <path id="Path_7057" d="M12,53H22.065v2.516H12Z" transform="translate(0 13.419)" fill="#fff"></path>
                                <path id="Path_7058" d="M12,57H22.065v2.516H12Z" transform="translate(0 14.452)" fill="#fff"></path>
                                <path class="svg-bac3" id="Path_7059" d="M49.032,67.645A5.037,5.037,0,0,1,44,62.613V45H54.065V62.613A5.037,5.037,0,0,1,49.032,67.645Z" transform="translate(8.258 11.355)" fill="#ff7400"></path>
                                <path id="Path_7060" d="M44,49H54.065v2.516H44Z" transform="translate(8.258 12.387)" fill="#fff"></path>
                                <path id="Path_7061" d="M44,53H54.065v2.516H44Z" transform="translate(8.258 13.419)" fill="#fff"></path>
                                <path id="Path_7062" d="M44,57H54.065v2.516H44Z" transform="translate(8.258 14.452)" fill="#fff"></path>
                            </g>
                        </svg>     
                    </div>
                    <h1 className='font-bold text-white text-[37px]'>1 Year</h1>
                    <h1 className='font-bold text-white text-[37px]'>1500</h1>
                    <h1 className='font-bold text-white text-[37px]'>MAD</h1>
                    <div className='self-start '>
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
