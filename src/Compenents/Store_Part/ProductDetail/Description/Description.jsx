import React from 'react'
import { useContext } from 'react'
import { shareProductDetails } from '../../../../Contexts/ProductDetails'
import Data from '../../Product-Data/Data'

const Description = () => {
    // this import for testing if the Data imported from database is working well
    let {DataBase,setDataBase} = useContext(shareProductDetails)
    
    let {selecteditem} = useContext(shareProductDetails)
    let product = DataBase[selecteditem-1]
  return (
    <>
    <section className='mt-10 ml-7 w-[70%] flex flex-col gap-9 pb-4'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-white font-bold text-[25px]'>Product Description :</h1>
        <p className='text-white'>{product.description}</p>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-white font-bold text-[25px]'>strong point :</h1>
        <ul className='text-white font-bold flex flex-col gap-3'>
              {product.pointfort}
          </ul>
      </div>
    </section>
    
    
    </>
    
  )
}

export default Description