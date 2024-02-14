import React from 'react'
import dumble from '../Store_Part/Store-part-pic/preloader.png'
const Alter = () => {
  return (
    <div className='absolute top-[80%] md:top-[55%] h-28 w-full flex justify-center items-center'>
        <img src={dumble} className="w-[70px] alter" alt="pic" />
    </div>
  )
}

export default Alter