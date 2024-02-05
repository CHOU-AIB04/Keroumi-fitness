import { useContext } from 'react'
import {React,useState,useEffect} from 'react'
import { HideNav } from '../../Contexts/Hide-nav-context'
export const Scroll = () => {
  let {scroll} = useContext(HideNav)
    let [Scroll,setscroll] = useState(false)
    useEffect(function(){
      addEventListener("scroll",function(){
        if(window.scrollY >= 300){
            setscroll(true)
        }else{
            setscroll(false)
        }
      })
    },[])

  return (
    <>
        {Scroll ? 
            <div className='w-10 h-10 bg-orange-500 rounded-full sh fixed bottom-10 right-10 small:right-12 flex justify-center items-center cursor-pointer z-40' onClick={scroll}>
                {
                location.pathname === "/Keroumi-V1/Protein/Product-details" || location.pathname === "/Keroumi-V1/Protein" || location.pathname === "/keroumi-V1/Protein/Card"  ?  <i className="bi bi-chevron-double-up text-white font-bold"></i> : <i className="bi bi-arrow-up text-white font-bold"></i>
                }
            </div> 
            : 
            <></>
        }
    </>
  )
}