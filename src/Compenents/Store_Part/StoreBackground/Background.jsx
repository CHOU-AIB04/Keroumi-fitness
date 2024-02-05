import React from 'react'
import back from '../Store-part-pic/background.webp'
const Background = () => {
  return (
    <div className="h-[550px] w-full bg-slate-600 absolute top-0 background">
        <img src={back} alt="picture" className="object-cover h-full w-full opacity-80" />
        <h1 className='absolute top-2/3 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white font-bold uppercase text-[50px]'>Shop</h1>
      </div>
  )
}

export default Background