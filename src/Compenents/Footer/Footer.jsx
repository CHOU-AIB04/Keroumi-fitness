import React from 'react'
import logo from '../../pictures/logo_keroumi.png'
import { Link ,NavLink,useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { HideNav } from '../../Contexts/Hide-nav-context'
import { motion } from 'framer-motion'
const Footer = (props) => {
    let navigate = useNavigate()
    const { shownav, setshownav, Hidenav } = useContext(HideNav);
    let style = {
        color : "orangered"
    }

  return (
    <footer className={`relative ${props.footer_responsive} h-56 flex flex-col items-center justify-between w-full`}>
        <Link to="Keroumi-fitness/">
        <motion.div initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} viewport={{once:true}} className='w-52 small:w-72 relative' onClick={Hidenav}>
            <img src={logo} alt="picture" />
        </motion.div>
        </Link>
        <motion.ul viewport={{once:true}} initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} className='text-white w-[350px] justify-evenly small:justify-between items-center flex relative'>
            <NavLink to="Keroumi-fitness/" end onClick={Hidenav} style={({isActive})=> isActive ? style: null}>
                <li className='transition-all duration-500 hover:text-orange-600 cursor-pointer'>Home</li>
            </NavLink>
            <NavLink to="Keroumi-fitness/Contact" end onClick={Hidenav} style={({isActive})=> isActive ? style: null}>
                <li className='transition-all duration-500 hover:text-orange-600 cursor-pointer'>Contact Us</li>
            </NavLink>
            <NavLink to="Keroumi-fitness/About" end onClick={Hidenav} style={({isActive})=> isActive ? style: null}>
                <li className='transition-all duration-500 hover:text-orange-600 cursor-pointer'>About Us</li>
            </NavLink>
            <NavLink to="Keroumi-fitness/Store" end onClick={Hidenav} style={({isActive})=> isActive ? style: null}>
                <li className='transition-all duration-500 hover:text-orange-600 cursor-pointer'>Protein<span className='ml-1'>Store</span></li>
            </NavLink>     
        </motion.ul>
       
        <motion.p viewport={{once:true}} initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} className='text-orange-600 relative top-4 text-[10px] small:text-[15px]'>@2024YassineKeroumi.All rights reserved.Developed By CHOUAIB</motion.p>
        <div className='bg-orange-600 h-3 w-full'></div>
    </footer>
  )
}
export default Footer