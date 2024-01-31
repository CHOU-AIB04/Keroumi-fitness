import React from 'react'
import preload from '../../pictures/preload.png'
export const Loading = () => {
  return (
    <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 preload'>
        <img src={preload}  alt="preload" />
    </section>
  )
}
