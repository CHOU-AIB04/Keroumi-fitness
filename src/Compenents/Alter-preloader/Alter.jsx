import React from 'react'
import dumble from '../Store_Part/Store-part-pic/preloader.png'
const Alter = () => {
  return (
    <div className='absolute top-[80%] left-[40%] -translate-x-1/2 -translate-y-1/2 alter'>
        <img src={dumble} className="w-[100px]" alt="pic" />
    </div>
  )
}

export default Alter