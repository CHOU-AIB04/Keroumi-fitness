import React from 'react'
import dumble from '../Store-part-pic/preloader.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { HideNav } from '../../../Contexts/Hide-nav-context'
const StoreFooter = () => {
    let style = {
        color : "orangered"
    }
    let {scroll} = useContext(HideNav)
  return (
    <footer className='w-full relative top-[540px] mt-20 h-[600px] sh'>
        <section className='w-full small_tablet:h-[70%] h-auto storecolor grid grid-cols-1 tablet:grid-cols-4 small_tablet:grid-cols-2 gap-10 tablet:gap-2 place-items-center pl-2 pb-3 small_tablet:pb-0'>
            <nav className='w-full h-full tablet:h-2/3 relative pl-9 space-y-4 flex flex-col items-center tablet:items-start border-b border-gray-400 small_tablet:border-none pb-2 small_tablet:pb-0'>
                <div className='flex justify-between mr-2 w-[200px]'>
                    <img src={dumble} alt="dumble" className='w-[25px]' />
                    <a href="#" className='text-xl text-white font-bold'>Yassine Keroumi</a>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-2xl text-white font-bold'>Follow Us Today:</h1>
                    <div className='flex gap-5 items-center ml-5'>
                        <div className='w-[40px] h-[40px] rounded-full transition-all duration-500 sh hover:scale-105 flex justify-center items-center'>
                            <i className='bi bi-facebook text-orange-500 text-xl'></i>
                        </div>
                        <div className='w-[40px] h-[40px] rounded-full transition-all duration-500 sh hover:scale-105 flex justify-center items-center'>
                            <i className='bi bi-instagram text-orange-500 text-xl'></i>
                        </div>
                        <div className='w-[40px] h-[40px] rounded-full transition-all duration-500 sh hover:scale-105 flex justify-center items-center'>
                            <i className='bi bi-youtube text-orange-500 text-xl'></i>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className='w-full h-full tablet:h-2/3 relative pl-9 border-b border-gray-400 small_tablet:border-none space-y-4 flex flex-col items-center tablet:items-start pb-9 small_tablet:pb-0'>
                <h1 className='text-white font-bold text-[30px]'>Menu</h1>
                <div>
                    <div className='flex gap-2'>
                        <i className="bi bi-chevron-double-right text-white"></i>
                        <a href="#" className='text-white font-bold  transition-all duration-500 hover:text-orange-500' onClick={scroll}><NavLink to="Keroumi-V1/" end style={({isActive})=> isActive ? style : null}>Coaching</NavLink></a>
                    </div>
                    <div className='flex gap-2'>
                        <i className="bi bi-chevron-double-right text-white"></i>
                        <a href="#" className='text-white font-bold  transition-all duration-500 hover:text-orange-500' onClick={scroll}><NavLink to="Keroumi-V1/Protein" end style={({isActive})=> isActive ? style : null}>Proteines & Produits</NavLink></a>
                    </div>
                </div>
            </nav>
            <nav className='w-full h-full tablet:h-2/3 relative pl-5 space-y-4 flex flex-col items-center tablet:items-start border-b border-gray-400 small_tablet:border-none pb-9 small_tablet:pb-0'>
                <h1 className='text-white font-bold text-[30px]'>Contact Info</h1>
                <div className='space-y-3 flex flex-col items-center tablet:items-start'>
                    <p className='text-white text-sm text-center small_tablet:text-start'>Visitez notre bureau ou contactez-nous par téléphone et par e-mail.</p>
                    <div className='flex gap-3 items-center'>
                        <i className='bi bi-geo-alt text-gray-500 transition-colors duration-500 hover:text-orange-500'></i>
                        <h2 className='text-white font-bold'>Casablanca</h2>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className='bi bi-phone text-gray-500 transition-colors duration-500 hover:text-orange-500'></i>
                        <h2 className='text-white font-bold'>+212 691 459 650</h2>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className='bi bi-envelope text-gray-500 transition-colors duration-500 hover:text-orange-500'></i>
                        <h2 className='text-white text-[16px] font-bold'>yassine@keroumifitness.com</h2>
                    </div>
                </div>
            </nav>
            <nav className='w-full h-full tablet:h-2/3 relative pl-5 space-y-4 flex flex-col items-center tablet:items-start border-b border-gray-400 small_tablet:border-none pb-9 small_tablet:pb-0'>
              <h1 className='text-white font-bold text-[30px]'>Recherche</h1>
              <div className="bg-white rounded-md overflow-hidden w-[220px] h-9">
                    <i className="bi bi-search text-gray-500"></i>
                    <input type="text" placeholder="Rechercher des produit..." className="h-full pl-2 focus:outline-none"/>
                </div>
            </nav>
        </section>
        <section className='w-full h-[30%] bg-zinc-800 flex flex-col justify-between items-center'>
            <div>
                <img src={dumble} alt="dumble" className='w-[50px]'/>
            </div>
            <h1 className='text-white font-bold'>Keroumi Fitness | Developed by:</h1>
            <h1 className='text-white font-bold cursor-pointer transition-all duration-500 hover:text-orange-500'>CHOUAIB ELBARRAH</h1>
            <p className='text-white text-sm'>© Keroumi Fitness 2023 | All Right Reserved</p>
        </section>
    </footer>
  )
}

export default StoreFooter