import {React,useState,useEffect} from 'react'
import pic_test from '../Store-part-pic/Carnitine.jpeg'

const Card = () => {
let [visible_table,setvisible_table] = useState(()=>{
  let big_one = ""
  let medium_one = ""
  if(window.innerWidth >=900){
    big_one = "visible"
    medium_one = "hidden"
  }else{
    big_one = "hidden"
    medium_one = "visible"
  }
  return{
    big_table : big_one,
    medium_table : medium_one
  }
})

useEffect(()=>{
  addEventListener("resize",()=>{
    console.log(window.innerWidth)
    if(window.innerWidth>=900){
      setvisible_table((prev)=>{
        return{
          ...prev,
          big_table : "visible",
          medium_table : "hidden"
        }
      })
    }else{
      setvisible_table((prev)=>{
        return{
          ...prev,
          big_table : "hidden",
          medium_table : "visible"
        }
      })
    }
  })
},[window.innerWidth])
  return (
    <section className='w-full h-auto storecolor top-[423px] relative flex flex-col items-center mt-8'>
      {/* table in the large screen */}
        <table className={`w-[95%] ${visible_table.big_table}`}>
          <tr className='text-[19px] text-center text-white card_color'>
            <td className='border-2 border-zinc-800 w-[50%] h-[60px] uppercase' colSpan={3}>Produit</td>
            <td className='w-[160px] h-[60px]  border-2 border-zinc-800 uppercase'>Prix</td>
            <td className='w-[160px] h-[60px]  border-2 border-zinc-800 uppercase'>quantité</td>
            <td className='w-[160px] h-[60px]  border-2 border-zinc-800 uppercase'>Sous-Total</td>
          </tr>
          <tr className='text-[20px] text-center text-white'>
            <td className='border-2 w-[100px] border-zinc-800 h-[90px]'>
              <i className="bi bi-x-circle-fill text-[30px] cursor-pointer"></i>
            </td>
            <td className=' h-[90px] w-[120px] flex justify-center items-center'>
              <img src={pic_test} alt="pic" className='w-[70%] h-[90%] rounded-md object-cover' />
            </td>
            <td className='border-2 border-zinc-800 h-[90px] text-[18px]'>100% Creatine Monohydrate Powder 300gr Tesla Nutrition</td>
            <td className='border-2 border-zinc-800 h-[90px]'>300 Mad</td>
            <td className='border-2 border-zinc-800 h-[90px]'>
              <input type="number" defaultValue={1} min={1} className="w-[100px] h-9 rounded-lg pl-2 pr-2 focus:outline-none product_color"/>
            </td>
            <td className='border-2 border-zinc-800 h-[90px]'>300 Mad</td>
          </tr>
          <tr className='card_color'>
            <td className='border-2 border-zinc-800 h-[90px]' colSpan={6}>
              <nav className='flex w-[90%] items-center justify-between relative left-1/2 -translate-x-1/2'>
                <div className='flex gap-5 items-center'>
                  <input type="text" name="" id="" className='w-52 h-12 rounded-2xl product_color text-white pl-3 focus:outline-none' placeholder='Code Promo'/>
                  <button className='bg-orange-500 h-12 rounded-xl w-52 text-white'>Appliquer le code Promo</button>
                </div>
                <button className='bg-orange-500 h-12 rounded-xl w-52 text-white'>Mettre A Jour le Panier</button>
              </nav>
            </td>
          </tr>
        </table>
        {/* table for medium screen and less */}
        <table className={`w-[95%] ${visible_table.medium_table}`}>
              <tr className='text-center border-2 h-16 border-zinc-800'>
                <td>
                  <i className="bi bi-x-circle-fill text-[30px] cursor-pointer text-white"></i>
                </td>
              </tr>
              <tr className='h-16 border-2 border-zinc-800'>
                <td>
                  <div className='flex items-center justify-between pl-4 pr-4 text-white font-bold '>
                    <p>Produit : </p>
                    <h1>Arginine</h1>
                  </div>
                </td>
              </tr>
              <tr className='h-16 border-2 border-zinc-800'>
                <td>
                  <div className='flex items-center justify-between pl-4 pr-4 text-white font-bold '>
                    <p>Prix</p>
                    <h2>300 Mad</h2>
                  </div>
                </td>
              </tr>
              <tr className='h-16 border-2 border-zinc-800'>
                <td>
                <div className='flex items-center justify-between pl-4 pr-4 text-white font-bold '>
                    <p>Quantité</p>
                    <input type="number" defaultValue={1} min={1} className="w-[100px] h-9 rounded-lg pl-2 pr-2 focus:outline-none product_color"/>
                  </div>
                </td>
              </tr>
              <tr className='h-16 border-2 border-zinc-800'>
                <td>
                <div className='flex items-center justify-between pl-4 pr-4 text-white font-bold '>
                    <p>Sous-Total</p>
                    <h2>300 Mad</h2>
                  </div>
                </td>
              </tr>
              <tr className='border-2 border-zinc-800'>
                <td className='flex flex-col items-center gap-2 border-zinc-800'>
                  <input type="text" className='w-[90%] h-12 rounded-2xl product_color text-white pl-3 focus:outline-none' placeholder='Code Promo'/>
                  <button className='bg-orange-500 h-12 rounded-xl w-[90%] text-white'>Appliquer le code Promo</button>
                  <button className='bg-orange-500 h-12 rounded-xl w-[90%] text-white'>Mettre A Jour le Panier</button>
                </td>
              </tr>
        </table>
        <nav className='self-center md:self-end small_tablet:w-[550px] w-[90%] mr-0 small_tablet:mr-9 mt-20 h-96 flex flex-col gap-4'>
              <h1 className='text-white font-bold text-[30px] uppercase'>Total panier</h1>
              <div className='flex flex-col card_color rounded-xl'>
                <div className='flex justify-between w-full pl-10 pr-10 items-center self-center h-20  second_product text-[20px] font-bold text-white'>
                  <h2>Sous-Total</h2>
                  <h3>200 Mad</h3>
                </div>
                <div className='flex justify-between w-full pl-10 pr-10 items-center self-center h-20 text-[20px] font-bold text-white'>
                  <h2>Sous-Total</h2>
                  <h3>200 Mad</h3>
                </div>
              </div>
              <button className='bg-orange-500 w-full h-12 rounded-2xl text-white font-bold mt-5'>Valider La commande</button>
        </nav>
    </section>
  )
}

export default Card