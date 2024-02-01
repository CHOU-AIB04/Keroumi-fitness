import {React,useState,useEffect} from 'react'

export const Scroll = () => {
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
    
    function handle(){
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }
  return (
    <>
        {Scroll ? 
            <div className='w-10 h-10 bg-orange-500 rounded-full sh fixed bottom-10 right-10 small:right-12 flex justify-center items-center cursor-pointer' onClick={handle}>
                <i className="bi bi-arrow-up text-white font-bold"></i>
            </div> 
            : 
            <></>
        }
    </>
  )
}
