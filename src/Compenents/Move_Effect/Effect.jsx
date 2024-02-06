import React from 'react'
import preload from '../../pictures/preload.png'
const Effect = () => {
  return (
    <div className='fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 effect_preload bg-white flex justify-center items-center'>
        <img src={preload} alt="preload" />
    </div>
  )
}

export default Effect