import { useContext } from 'react';
import {React,useState,useEffect} from 'react'
import toast from 'react-hot-toast';
import { shareProductDetails } from '../../../Contexts/ProductDetails';
import Data from '../Product-Data/Data';
import Promo from './PromoCode/Promo';

const Checkout = ({onload}) => {
    // this useeffect to load the header and footer component when this component load
  useEffect(() => {
    const fetchData = async () => {
      onload && onload();
    };
    fetchData();
}, []);
// this usestate it's hide or show the code promo part
let [isvisible,setisvisible] = useState(false)
function handleclick(){
  setisvisible(prev => !prev)
}
// this usecontext it's for importing from the L.S
let {card} = useContext(shareProductDetails)
let {cardtot} = useContext(shareProductDetails)
// usestate for handling the promo code
let {promocode} = useContext(shareProductDetails)
let {setpromocode} = useContext(shareProductDetails)

// function for the promo code 
function Promocode(){
  let inputvalue = document.getElementById("Codeinput").value
  if (inputvalue === "")  {
    toast.error("Promo Code input is empty")
  }else{
    if (Promo.includes(inputvalue)) {
    let promotion = cardtot - (cardtot*0.1)
    setpromocode(promotion)
    toast.success("promo Code Applied")
  }else{
    toast.error("Invalid Promo Code")
  }
  }

}
  return (
    <>
     <section className='w-[90%]  top-[423px] relative flex flex-col items-center pt-4 left-1/2 -translate-x-1/2'>
        <div className='w-full card_color h-12 pt-2 pl-5 flex items-center border-t-4 border-blue-500'> 
            <i className="bi bi-window font-bold text-blue-600"></i>
            <div className='flex items-center gap-5 ml-7 text-[15px]'>
              <h1 className='text-slate-100  font-bold text-[10px] small_tablet:text-sm'>Avez-vous in code promo?</h1>
              <p className='text-white cursor-pointer text-[10px] small_tablet:text-sm  transition-colors duration-300 hover:text-orange-500' onClick={handleclick}>Cliquez ici pour saisir votre code</p>
            </div>
        </div>
        {/* code promo part */}
        {
          isvisible ? 
          <nav className={`storecolor border-2 border-zinc-800  relative w-full mt-7 h-24 rounded-md flex flex-col justify-evenly pl-5`}>
            <h1 className='text-zinc-500 text-[12px] small_tablet:text-sm'>Si vous possédez un code promo,Veuillez l'appliquer ci-dessous.</h1>
            <div className='w-full small_tablet:w-[70%] justify-between small_tablet:justify-start flex items-center gap-3'>
              <input type="text" name="" id="Codeinput" placeholder='Code Promo' className='w-[70%] h-10 rounded-xl pl-3 border bg-zinc-700 focus:outline-none text-white'/>
              <button className='w-52 h-10 bg-orange-500 text-[12px]  text-white font-bold rounded-xl sh transition-colors duration-500 hover:text-orange-500 hover:bg-white' onClick={Promocode}>Appliquer le Code Promo</button>
            </div>
        </nav> : <></>
        }
        {/* the user info part */}
        <nav className='self-start mt-5 space-y-4'>
          <h1 className='text-white font-bold  text-[30px]'>Détails de Facturation</h1>
          <div className='space-y-1'>
            <p className='text-white text-[12px] small_tablet:text-sm'>Nom Complet <span className='text-red-500 font-bold text-[20px]'>*</span></p>
            <input type="text" name="" id="" placeholder='Nom Complet' className='w-80 small_tablet:w-96 h-10 rounded-xl bg-zinc-800 border border-zinc-700 pl-4 focus:outline-none text-white'/>
          </div>
          <div className='space-y-1'>
            <p className='text-white text-[12px] small_tablet:text-sm'>Ville & Adresse complete (Facultatif)</p>
            <input type="text" name="" id="" placeholder='Ville & Adresse complete' className='w-80 small_tablet:w-96 h-10 rounded-xl bg-zinc-800 border border-zinc-700 pl-4 focus:outline-none text-white'/>
          </div>
          <div className='space-y-1'>
            <p className='text-white text-[12px] small_tablet:text-sm'>Telephone <span className='text-red-500 font-bold text-[20px]'>*</span></p>
            <input type="text" name="" id="" placeholder='Telephone' className='w-80 small_tablet:w-96 h-10 rounded-xl bg-zinc-800 border border-zinc-700 pl-4 focus:outline-none text-white'/>
          </div>
        </nav>
        {/* Commande Part */}
        <nav className='w-full mt-10 space-y-3'>
          <h1 className='text-white font-bold  text-[30px]'>Votre Commande</h1>
          <table className='w-full'>
              <tr className='font-bold text-white text-[12px] small_tablet:text-sm'>
                <td  className='border-2 border-zinc-600 w-[75%] h-[55px] pl-5'>Produit</td>
                <td className='border-2 border-zinc-600 w-[25%] h-[55px] text-end pr-3'>Sous-TOTAL</td>
              </tr>
              {
                card.map(function(e){
                  let product = Data[e]
                  return(
                    <tr className='font-bold text-white text-[12px] small_tablet:text-sm'>
                      <td  className='border-2 border-zinc-600 w-[75%] h-[55px] pl-5'>{product.tittle}</td>
                      <td className='border-2 border-zinc-600 w-[25%] h-[55px] text-end pr-4'>{product.price} Mad</td>
                  </tr>
                  )
                })
              }
              <tr className='font-bold text-white text-[12px] small_tablet:text-sm'>
                <td  className='border-2 border-zinc-600 w-[75%] h-[55px] pl-5'>Sous-TOTAL</td>
                <td className='border-2 border-zinc-600 w-[25%] h-[55px] text-end pr-4'>{cardtot} Mad</td>
              </tr>
              <tr className='font-bold text-white text-[12px] small_tablet:text-sm'>
                <td  className='border-2 border-zinc-600 w-[75%] h-[55px] pl-5'>Total</td>
                <td className='border-2 border-zinc-600 w-[25%] h-[55px] text-end pr-4'>{promocode} Mad</td>
              </tr>
          </table>
          <table className='w-full relative top-7'>
                <tr>
                  <td className='border border-zinc-600 h-[100px]'>
                    <div className='relative bottom-5 pl-4 text-zinc-500 paybefore'>Payement a livraison</div>
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-600 h-[100px] flex flex-col justify-around pl-3'>
                    <h1 className='text-zinc-500'>Payement a livraison dans tous le maroc</h1>
                    <button className='w-52 h-10 bg-orange-500 text-white font-bold rounded-xl sh transition-colors duration-500 hover:text-orange-500 hover:bg-white self-end mr-4'>Commander</button>
                  </td>
                </tr>
          </table>
        </nav>
     </section>
    </>
  )
}

export default Checkout