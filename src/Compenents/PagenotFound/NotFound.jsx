import React from 'react'
import { Link } from 'react-router-dom'
import logo_keroumi from "../../pictures/logo_keroumi.png"
Link
const NotFound = () => {
  return (
    <section className='w-full md:w-[700px] h-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-evenly'>
        <img src={logo_keroumi} alt="picture" className='w-2/3'/>
        <div className='space-y-2'>
            <h1 className='text-orange-500 font-bold text-[30px]'>OOOOOOOPS!</h1>
            <h2 className='text-white font-bold text-[20px]'>Page Not Found 404</h2>
        </div>
        <Link to="/Keroumi-V1/">
            <button className='bg-orange-500 text-white font-bold h-11 w-56 rounded-md transition-all duration-500 hover:scale-105 hover:text-orange-500 hover:bg-white sh'>Return to the home Page</button>
        </Link>
    </section>   
  )
}

export default NotFound;