import React from 'react'
import { useContext } from 'react'
import { shareProductDetails } from '../../../Contexts/ProductDetails'

const ProductDetails = () => {
    let {selecteditem} = useContext(shareProductDetails)
  return (
    <article className='w-full h-96 bg-green-400 relative top-[423px]'>
        <h1>Product details components</h1>
        <section></section>
        <section></section>
    </article>
  )
}

export default ProductDetails