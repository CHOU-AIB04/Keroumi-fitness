import React from 'react'
import { useContext } from 'react'
import { shareProductDetails } from '../../../../Contexts/ProductDetails'
import Data from '../../Product-Data/Data'

const Comment = () => {
    let {selecteditem} = useContext(shareProductDetails)
    let tittle = Data[selecteditem-1]
  return (
    <div className='mt-5 text-white  w-full flex justify-center items-center'>
        <nav className='w-[90%]  h-auto pl-5 flex flex-col gap-5'>
            <div className='h-20 flex flex-col justify-between '>
                <h1 className='text-[20px] text-white font-bold'>Avis</h1>
                <p className='text-gray-500'>il n'y a pas encore avis</p>
            </div>

            <div className='flex flex-col  gap-7'>
                <h1>Soyez le premier à laisser votre avis sur "{tittle.tittle}"</h1>
                <form className='flex flex-col gap-6'>
                    <p className='text-gray-500'>All fields marked with an asterisk (*) are required</p>
                    <div className='flex flex-col gap-3'>
                        <label  className='text-gray-500'>Nom *</label>
                        <input type="text" name="" id="" className='h-12 rounded-md mr-2 focus:outline-none bg-zinc-600 pl-4 text-white'/>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label  className='text-gray-500'>E-mail *</label>
                        <input type="text" name="" id="" className='h-12 rounded-md mr-2 focus:outline-none bg-zinc-600 pl-4 text-white'/>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type="checkbox" name="" id="" />
                        <p className='text-gray-300'>Enregistrer mon nom,mon e-mail et mon site dans le navigateur pour mon prochain commentaire</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-gray-500'>Votre note * </p>
                        <div className='flex items-center gap-1'>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-gray-500'>Votre avis *</p>
                       <textarea className='min-h-20 max-h-28  rounded-md mr-2 focus:outline-none bg-zinc-600 pl-4 pt-4 text-white'></textarea>
                    </div>
                    <button className='w-36 h-12 bg-orange-500 rounded-lg text-white mb-2 font-bold transition-all duration-500 hover:bg-white hover:text-orange-500 sh'>Post Comment</button>
                </form>
            </div>

        </nav>
    </div>
  )
}

export default Comment