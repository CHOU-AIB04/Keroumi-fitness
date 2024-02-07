import React from 'react'
import { useContext } from 'react'
import { shareProductDetails } from '../../../../Contexts/ProductDetails'
import Data from '../../Product-Data/Data'

const Description = () => {
    let {selecteditem} = useContext(shareProductDetails)
    let product = Data[selecteditem-1]
  return (
    <ul className='mt-10 text-white font-bold flex flex-col gap-3 ml-7 w-[70%]'>
        {product.pointfort}
    </ul>
  )
}

export default Description