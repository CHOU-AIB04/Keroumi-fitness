import React from 'react'
import logo from '../../pictures/logo_keroumi.png'
import { Link ,NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { HideNav } from '../../Contexts/Hide-nav-context'
import { motion } from 'framer-motion'
export const Footer = () => {
    const { shownav, setshownav, Hidenav } = useContext(HideNav);
    let style = {
        color : "orangered"
    }
  return (
    <footer className='relative sm:top-[4100px] top-[2950px] small_tablet:top-[1350px] h-56 flex flex-col items-center justify-between w-full'>
        <Link to="/">
        <motion.div initial={{left:"-150px",opacity:0}} transition={{duration:1}} whileInView={{left:"0px",opacity:1}} viewport={{once:true}} className='w-52 small:w-72 relative'>
            <img src={logo} alt="picture" />
        </motion.div>
        </Link>
        <motion.ul viewport={{once:true}} initial={{left:"150px",opacity:0}} transition={{duration:1}} whileInView={{left:"0px",opacity:1}} className='text-white w-[350px] justify-evenly small:justify-between items-center flex relative'>
            <NavLink to="/" onClick={Hidenav} style={({isActive})=> isActive ? style: null}>
                <li className='transition-all duration-500 hover:text-orange-600 cursor-pointer'>Home</li>
            </NavLink>
            <NavLink to="/Contact" onClick={Hidenav} style={({isActive})=> isActive ? style: null}>
                <li className='transition-all duration-500 hover:text-orange-600 cursor-pointer'>Contact</li>
            </NavLink>
            <NavLink to="/About" onClick={Hidenav} style={({isActive})=> isActive ? style: null}>
                <li className='transition-all duration-500 hover:text-orange-600 cursor-pointer'>About</li>
            </NavLink>
            <NavLink to="/Protein" onClick={Hidenav} style={({isActive})=> isActive ? style: null}>
                <li className='transition-all duration-500 hover:text-orange-600 cursor-pointer'>Protein<span className='ml-1'>Store</span></li>
            </NavLink>     
        </motion.ul>
       
        <motion.p viewport={{once:true}} initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} className='text-orange-600 relative top-4 text-[10px] small:text-[12px]'>@2024YassineKeroumi.All rights reserved.Developed By CHOUAIB</motion.p>
        <div className='bg-orange-600 h-3 w-full'></div>
    </footer>
  )
}
