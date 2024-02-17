import {React,useState} from 'react'
import logo from '../../pictures/logo_keroumi.png'
import { Link, NavLink,useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { HideNav } from '../../Contexts/Hide-nav-context'
import { motion } from 'framer-motion'


const Header = () => {
    let {Hidenav} = useContext(HideNav)
    let {setshownav} = useContext(HideNav)
    let {shownav} = useContext(HideNav)
    let {handle_click} = useContext(HideNav)
    let style = {
        color : "orangered"
    }
    return (
    <>
    <header className='fixed w-full top-0 bg-black sh h-28 rounded-md z-40'>
        <Link to="Keroumi-V1/">
            <motion.div initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} viewport={{once:true}} className='w-[140px] absolute top-1/2 -translate-y-1/2  sm:w-64 small_tablet:w-80 left-5 small_tablet:left-14'>
                <img src={logo} alt="picture" />
            </motion.div>
        </Link>
        <ul className={` ${shownav.opacity} small_tablet:visible absolute top-[190%] small_tablet:top-[55%] -translate-y-1/2 left-0 bg-white small_tablet:bg-transparent  sh small_tablet:shadow-none small_tablet:left-[47%] w-full small_tablet:w-[45%] h-52 small_tablet:h-full flex items-center  gap-3 small_tablet:gap-10 small_tablet:justify-start justify-between flex-col small_tablet:flex-row text-black small_tablet:text-white`}>
            <li><NavLink to="Keroumi-V1/" end className='relative h-10 small_tablet:h-28 af  small_tablet:w-auto flex items-center cursor-pointer'onClick={Hidenav} style={({isActive})=> isActive ? style: null}>Home</NavLink></li>
            <li><NavLink to="Keroumi-V1/Contact"className='relative h-10 small_tablet:h-28 af flex items-center cursor-pointer' onClick={Hidenav} style={({isActive})=> isActive ? style: null}>Contact Us</NavLink></li>
            <li><NavLink to="Keroumi-V1/About"className='relative h-10 small_tablet:h-28 af flex items-center cursor-pointer' onClick={Hidenav} style={({isActive})=> isActive ? style: null}>About us</NavLink></li>
            <li><NavLink to="Keroumi-V1/Store"className='relative h-10 small_tablet:h-28 af flex items-center cursor-pointer' onClick={Hidenav} style={({isActive})=> isActive ? style: null}>Protein<span className='ml-1'>Store</span></NavLink></li>
        </ul>
        <i className="bi bi-search absolute top-1/2 -translate-y-1/2 text-white  right-10 text-[22px]"></i>
        <i className={`${shownav.icon} absolute top-1/2 -translate-y-1/2 text-white text-[22px]  right-20 visible small_tablet:hidden transition-all duration-500 cursor-pointer`} onClick={handle_click}></i>
    </header>
   
    </>
  )
}

export default Header