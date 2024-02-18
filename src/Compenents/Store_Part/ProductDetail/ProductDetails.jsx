import React from 'react'
import { useContext,useEffect } from 'react'
import { shareProductDetails } from '../../../Contexts/ProductDetails'
import Data from '../Product-Data/Data'
import { useNavigate,NavLink,Outlet, Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import Comment from './Comment/Comment'
import Description from './Description/Description'
import toast from 'react-hot-toast'

const ProductDetails = ({onload}) => {
  let navigate = useNavigate()
  // the next usecontext it's for card component product
  let {card} = useContext(shareProductDetails)
  let {setcard} = useContext(shareProductDetails)
  let {setselecteditem} = useContext(shareProductDetails)
  let {selecteditem} = useContext(shareProductDetails)
  let [showslide ,setshowslide] = useState(()=>{
    if(window.innerWidth >= 1050){
      return 3
    }else if (window.innerWidth <= 500){
      return 1
    }
    else{
      return 2
    }

  })
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: showslide,
    slidesToScroll: 1,
  };
  useEffect(() => {
    const fetchData = async () => {
      onload && onload();
    };
    fetchData();
}, []);
  let styles = {
    color : "orangered"
  } 
  useEffect(()=>{
    addEventListener("resize",()=>{
      if(window.innerWidth >= 1050){
        setshowslide(3) 
      }
      else if (window.innerWidth <= 500){
        setshowslide(1) 
      }
      else if (window.innerWidth >500){
        setshowslide(2)
      }
      else{
        setshowslide(3) 
      }
  
    })
  },[showslide])
    let product = Data[selecteditem-1]
    let element = []
    let additional_product = []
      // this for statement it's for ramdom num in element array
    for (let i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * Data.length)
      if (element.includes(random) || random === selecteditem-1) {
          random++
          element.push(random)
      }else{
        element.push(random)
      }
    }
      // this for statement it's for ramdom num in additional_product array
    for (let i = 1; i < 11; i++) {
      let random = Math.floor(Math.random() * Data.length)
      if (additional_product.includes(random)) {
          random++
          if (additional_product.includes(random)){
            random +=1
            additional_product.push(random)
          }
        
      }else{
        additional_product.push(random)
      }
    }
  // this function it's for switching the current product in the product details
  function switch_index(id){
      setselecteditem(id)
      window.scrollTo({
        top:500,
        behavior:"smooth"
      })
      window.localStorage.setItem("currentproduct",id)
  }
// this shared usestate from the app (cardtot,setcardt) it's for taking the price sum from the L.S
let {cardtot} = useContext(shareProductDetails);
let {setcardtot} = useContext(shareProductDetails);
let {setpromocode} = useContext(shareProductDetails)
// this function it's for delete item from the local storage and update the total item in the L.S
function RemoveItem(id){
  let index = id-1
  let localtot = +window.localStorage.getItem("total")
  let productprice = Data[id-1].price
  let newtot = localtot-productprice
  let promotot = newtot - (newtot*0.1)
  let array = JSON.parse(window.localStorage.getItem("arr"))
  let newarray = array.filter(element => element !== index);
  window.localStorage.setItem("arr",JSON.stringify(newarray))
  setcard(newarray)
  window.localStorage.setItem("total",newtot)
  setcardtot(newtot)
  toast.success("Removed from the Card")
  setpromocode(newtot)
 }

// this function it's for adding a new product to the card component and add it in local storage eitheir
function Additem(id){
  //  the first item from L.s . for get the an array to push in this array new product and display it card component
let localarray = localStorage.getItem("arr")
    // this one it's for take this item from L.S and add on it the product price to display it in the card component
let totlocal = +localStorage.getItem("total")
let exist = localarray.includes(id-1)
let productprice = Data[id-1].price
if(exist){
  toast.error("Product Already exist")
  return
}else{
  let array = [...card,id-1]
  toast.success("Added to Card")
  window.localStorage.setItem("arr",JSON.stringify(array))
  setcard(array)
  let tot = totlocal + productprice
  window.localStorage.setItem("total",tot)
  setcardtot(tot)
  setpromocode(tot)
}
}
// this usestate it's for showwing description component or comment component instead of using usenavigate
let [detailscontent,setdetailscontent] = useState({
  component : <Description />,
  active : 1
})
  return (
    <article className='w-full h-auto storecolor relative top-[423px] store:grid flex flex-col items-center  store:grid-cols-3 gap-56 store:gap-0 left-1/2 -translate-x-1/2 place-content-center'>
                        
                         {/* begin the product section  */}
                         
        <section className='col-span-2 h-auto w-full flex flex-col items-center gap-10'>
          <nav className='h-auto store:pl-3 pl-2 pt-3 w-full flex-col md:flex-row flex  gap-6 items-center'>
            <div className='h-[350px] w-[350px] md:w-[800px] md:h-[450px] flex justify-center items-center rounded-xl overflow-hidden relative'>
              <img src={product.pic} alt="product" className='h-full w-full object-cover' />
              <div className='absolute top-1 right-1 w-12 h-12 rounded-full bg-orange-500 flex justify-center items-center'>
                  <i className='bi bi-search text-white font-bold text-[25px]'></i>
              </div>
              {
                product.fake_price ? 
                <div className='w-16 h-16 bg-orange-500 rounded-full flex justify-center items-center absolute top-2 left-3'>
                  <p className='text-white text-sm'>Promo!</p>
                </div> : <></>
              }
            </div>
            <div className='flex w-[90%] flex-col gap-4 pb-4'>
              <h1 className='text-white text-[25px] sm:text-[40px] font-bold'>{product.tittle}</h1>
              <div className='flex items-center gap-4'>
                <p className='text-white font-bold'>{product.price} Mad</p>
                {
                  product.fake_price ? <p className='text-white line-through'>{product.fake_price} Mad</p> : <></>
                }
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-2xl text-white'>Point Fort :</h1>
                <ul className='text-white flex flex-col gap-2'>
                  {product.pointfort.map(function(e){
                    return(
                      <li>{e}</li>
                    )
                  })}
                </ul>
              </div>
              {
                product.available ? 
                <div className='flex items-center gap-5'>
                    <input type="number" className='w-24 focus:outline-none pl-3 h-7 rounded-md bg-zinc-800 text-white' defaultValue={1} min={1}/>
                    <button className='w-36 h-10 transition-all duration-500 hover:bg-white hover:text-orange-500 cursor-pointer rounded-md bg-orange-500 text-white'>Ajouter Au Panier</button>
                </div> : <p className='text-red-500 text-sm'>Rupture du Stock</p>
              }
            </div>
          </nav>
          <nav className='w-[95%] min-h-96 h-auto storecolor border-2 border-gray-500 rounded-md'>
            <div className='w-[300px] h-14 flex gap-3 mt-1 ml-1'>
               <nav className={`w-1/2 h-full bg-gray-700 flex justify-center items-center ${detailscontent.active === 1 ? "text-orange-500" : "text-white"} transition-all duration-500 hover:text-orange-500 text-xl cursor-pointer`} onClick={()=>setdetailscontent((prev) =>({...prev,active : prev.active = 1,component : prev.component = <Description />}))}>Descriton</nav> 
               <nav className={`w-1/2 h-full bg-gray-700 flex justify-center items-center ${detailscontent.active === 2 ? "text-orange-500" : "text-white"} transition-all duration-500 hover:text-orange-500 text-xl cursor-pointer`} onClick={()=>setdetailscontent((prev) =>({...prev,active : prev.active = 2,component : prev.component = <Comment />}))}>Avis</nav>
            </div>
            {
              detailscontent.component
            }
          </nav>
              <nav className='w-[87%] h-auto flex justify-center items-center mt-5'>
                  <div className='w-full h-full'>
                    <Slider {...settings}>
                      {
                        additional_product.map(function(e){
                          let product = Data[e]
                          return(
                          <nav id={product.id} key={product.id} className={`group cursor-pointer transition-all duration-500 hover:scale-95 product_color  pt-4 gap-3 rounded-md w-[300px] h-[470px] relative`}>
                            <div className='w-[180px] flex-col group-hover:opacity-55 transition-all duration-500 bg-gray-400 h-[180px] rounded-md flex justify-center items-center relative left-1/2 -translate-x-1/2'>
                              <img src={product.pic} className="rounded-md w-[90%] h-[90%]" alt="product" />
                              {
                                product.fake_price ? <p className='bg-orange-500 absolute top-0 right-0 w-12 h-12 rounded-full flex justify-center items-center text-white text-sm'>Promo!</p> : <></>
                              }
                            </div>
                            <div className='flex flex-col items-center gap-3 relative h-1/2 mt-2'>
                              <h1 className='text-white font-bold text-sm uppercase text-center w-[90%] transition-colors duration-500 cursor-pointer hover:text-orange-500' onClick={()=>switch_index(product.id)}>{product.tittle}</h1>
                                <div className='flex gap-1 items-center'>
                                  <i className="bi bi-star-fill text-blue-400"></i>
                                  <i className="bi bi-star-fill text-blue-400"></i>
                                  <i className="bi bi-star-fill text-blue-400"></i>
                                  <i className="bi bi-star-fill text-blue-400"></i>
                                  <i className="bi bi-star-fill text-blue-400"></i>
                                </div>
                                <div className='flex gap-4 items-center'>
                                  <p className='text-zinc-500 test-sm'>{product.price} MAD</p>
                                  {product.fake_price ? <p className='text-zinc-500 line-through test-sm'>{product.fake_price} MAD</p> : <></>}
                                </div>
                                {
                                  product.available ? <button className='text-white font-bold w-[150px] h-10 rounded-xl bg-orange-500 transition-all duration-500 hover:scale-105 hover:bg-white sh hover:text-orange-500 absolute bottom-3' onClick={()=>Additem(product.id)}>Ajouter au panier</button> : <button className='text-white font-bold w-[150px] h-10 rounded-xl bg-orange-500 transition-all sh duration-500 hover:scale-105 hover:bg-white hover:text-orange-500 absolute bottom-3' onClick={()=>switch_index(product.id)}>lire la suite</button>
                                }
                            </div>
                          </nav>
                          )
                        })
                      }                        
                    </Slider>
                </div>
          </nav>
        </section>
                           {/* End the product details section */}

        <section className=' h-auto w-full flex flex-col items-center gap-5 justify-between'>
              <nav className='bg-zinc-800 mt-2 border-2 border-gray-400  w-full store:w-[380px] min-h-44 h-auto rounded-md pl-9 flex flex-col justify-evenly'>
                { card.length > 0 ? 
                  <>
                    <h1 className='text-white font-bold text-[30px]'>Cart</h1>
                    <div className='space-y-5 pb-4 mt-4'>
                    {
                      card.map(function(e){
                        let product = Data[e]
                        return(
                          <nav className='w-full h-20 flex items-center gap-4' key={product.id}>
                            <div className='h-full w-24 rounded-md overflow-hidden relative'>
                              <img src={product.pic} alt="picture" className='w-full h-full object-cover' />
                              <i className="bi bi-x absolute -top-3 -left-1 text-orange-500 text-[30px] transition-colors duration-500 hover:text-black cursor-pointer" onClick={()=>RemoveItem(product.id)}></i>
                            </div>
                            <div className='text-white fotn-bold w-2/3 space-y-2'>
                              <h1 className='text-[14px]'>{product.tittle}</h1>
                              <p className='text-[17px] text-gray-500'>1 * {product.price} MAD</p>
                            </div>
                          </nav>
                        )
                      })
                    }
                    </div>
                    <nav className='space-y-3 flex flex-col items-center border-t-4 border-white mr-5 pb-2 pt-2'>
                      <div className='flex justify-between items-center pr-6 w-full'>
                        <h1 className='text-white font-bold'>Sous-Total : </h1>
                        <h2 className='text-white font-bold'>{cardtot} Mad</h2>
                      </div>
                      <div className='flex gap-10'>
                        <button className='w-36 h-10 bg-orange-500 font-bold text-white rounded-md transition-colors duration-500 hover:bg-white hover:text-orange-500 sh' onClick={()=>{navigate("/Keroumi-fitness/Store/cart"),scrollTo({ top:400,behavior:"smooth"})}}>Voir le panier</button>
                        <button className='w-36 h-10 bg-orange-500 font-bold text-white rounded-md transition-colors duration-500 hover:bg-white hover:text-orange-500 sh'>Commander</button>
                      </div>
                    </nav>
                  </> 
                  :
                  <>
                  <h1 className='text-white text-[30px] font-bold'>Cart</h1>
                  <p className='text-white '>Votre Panier est vide</p>
                  </>
                }
              </nav>
              <nav className=' w-full store:w-[350px] h-auto rounded-md flex flex-col items-center gap-2'>
                  <h1 className='text-white text-[30px] font-bold  '>Product : </h1>
                  <div className='grid grid-cols-1 store:grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                      element.map(function(e,index){
                        index++
                        let product = Data[e]
                        return(
                              <div key={product.id} className={`w-full h-28 flex items-center justify-between ${index !== element.length ? "second_product" : null}`}>
                                  <div className='w-[100px] h-24  rounded-md overflow-hidden'>
                                    <img src={product.pic} alt="pic" className='w-full h-full object-cover' />
                                  </div>
                                  <div className='flex flex-col gap-5 w-2/3 '>
                                    <h1 className='text-white cursor-pointer transition-all duration-500 hover:text-orange-500'onClick={()=>switch_index(product.id)}>{product.tittle}</h1>
                                    <div className='flex gap-2 items-center'>
                                      <p className='text-white text-sm'>{product.price} Mad</p>
                                      {
                                        product.fake_price ? 
                                        <p className='text-white text-sm line-through'>{product.fake_price} Mad</p>
                                        : <></>
                                      }
                                    </div>
                                  </div>
                              </div>
                        )
                      })
                    }
                  </div>
              </nav>
        </section>
    </article>
  )
}

export default ProductDetails