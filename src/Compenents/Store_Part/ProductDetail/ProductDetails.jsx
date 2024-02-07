import React from 'react'
import { useContext,useEffect } from 'react'
import { shareProductDetails } from '../../../Contexts/ProductDetails'
import Data from '../Product-Data/Data'
import { useNavigate,NavLink,Outlet } from 'react-router-dom'

const ProductDetails = ({onload}) => {
  useEffect(() => {
    const fetchData = async () => {
      onload && onload();
    };
    fetchData();
}, []);
  let styles = {
    color : "orangered"
  }
  let navigate = useNavigate()
    let {setselecteditem} = useContext(shareProductDetails)
    let {selecteditem} = useContext(shareProductDetails)
    let product = Data[selecteditem-1]
    let element = []
    for (let i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * Data.length)
      if (element.includes(random) || random === selecteditem-1) {
          random++
          element.push(random)
      }else{
        element.push(random)
      }
    }
    function switch_index(id){
      setselecteditem(id)
      navigate("/Keroumi-V1/Protein/Product-details")
      window.scrollTo({
        top:500,
        behavior:"smooth"
      })
    }
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
              <NavLink to="" end className="w-1/2 h-full bg-gray-700 flex justify-center items-center text-white transition-all duration-500 hover:text-orange-500 text-xl cursor-pointer" style={({isActive})=> isActive ? styles : null}>Descriton</NavLink>
              <NavLink to="Comment" className='w-1/2 h-full bg-gray-700 flex justify-center items-center text-white transition-all duration-500 hover:text-orange-500 text-xl cursor-pointer' style={({isActive})=> isActive ? styles : null}>Avis</NavLink>
            </div>
            <Outlet />
          </nav>
        </section>
                           {/* End the product details section */}

        <section className=' h-auto w-full flex flex-col items-center gap-5 justify-between'>
              <nav className='bg-zinc-700 mt-2 border-2 border-gray-400  w-full store:w-[350px]  h-44 rounded-md pl-9 flex flex-col justify-evenly'>
                <h1 className='text-white text-[30px] font-bold'>Cart</h1>
                <p className='text-white '>Votre Panier est vide</p>
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