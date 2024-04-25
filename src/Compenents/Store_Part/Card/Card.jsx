import { useContext } from 'react'
import {React,useState,useEffect} from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { shareProductDetails } from '../../../Contexts/ProductDetails'
import Promo from '../Checkout/PromoCode/Promo'
import Data from '../Product-Data/Data'


const Card = ({onload}) => {
  // this import for testing if the Data imported from database is working well
  let {DataBase,setDataBase} = useContext(shareProductDetails)

  // this useeffect to load the header and footer component when this component load
  useEffect(() => {
    const fetchData = async () => {
      onload && onload();
    };
    fetchData();
}, []);

  let navigate = useNavigate()
  let {card} = useContext(shareProductDetails)
  let {setcard} = useContext(shareProductDetails)
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
// this shared usestate from the app (cardtot,setcardt) it's for taking the price sum from the L.S
let {cardtot} = useContext(shareProductDetails);
let {setcardtot} = useContext(shareProductDetails);
// this function it's for delete item from the local storage and update the total item from the L.S

function RemoveItem(id){
  let index = parseInt(id)
  let localtot = +window.localStorage.getItem("total")
  let productprice = DataBase.filter((e)=> parseInt(e.id) === index)[0].price
  let newtot = localtot-parseInt(productprice)
  let promotot = newtot - (newtot*0.1)
  let array = JSON.parse(window.localStorage.getItem("arr"))
  let newarray = array.filter(element => element.prod !== index);
  window.localStorage.setItem("arr",JSON.stringify(newarray))
  setcard(newarray)
  window.localStorage.setItem("total",newtot)
  setcardtot(newtot)
  setpromocode(newtot)
  toast.success("Removed from the Card")
}
// this function it's for applying the promo code for table 1
let {promocode} = useContext(shareProductDetails)
let {setpromocode} = useContext(shareProductDetails)
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
// this function it's for applying the promo code for table 2
function Promocode2(){
  let inputvalue = document.getElementById("Codeinput2").value
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
    <section className='w-full h-auto storecolor top-[423px] relative flex flex-col items-center mt-8'>

      {/* check if the card state is not empty */}

      {
        card.length > 0 ?
        /* table in the large screen */
        <table className={`w-[95%] ${visible_table.big_table}`}>
          <tr className='text-[19px] text-center text-white card_color'>
            <td className='border-2 border-zinc-800 w-[50%] h-[60px] uppercase' colSpan={3}>Produit</td>
            <td className='w-[160px] h-[60px]  border-2 border-zinc-800 uppercase'>Prix</td>
            <td className='w-[160px] h-[60px]  border-2 border-zinc-800 uppercase'>quantité</td>
            <td className='w-[160px] h-[60px]  border-2 border-zinc-800 uppercase'>Sous-Total</td>
          </tr>
          {
            card.map(function(e){
              let product = DataBase.filter((prod)=>parseInt(prod.id) === e.prod)[0]
              return(
                <tr className='text-[20px] text-center text-white'>
                <td className='border-2 w-[100px] border-zinc-800 h-[90px]'>
                  <i className="bi bi-x-circle-fill text-[30px] cursor-pointer transition-colors duration-500 hover:text-orange-500" onClick={()=>RemoveItem(product.id)}></i>
                </td>
                <td className=' h-[90px] w-[120px] flex justify-center items-center'>
                  <img src={`http://localhost/MY_PROJECTS/KeroumiDash/products/${product.pic}`} alt="pic" className='w-[70%] h-[90%] rounded-md object-cover' />
                </td>
                <td className='border-2 border-zinc-800 h-[90px] text-[18px]'>{product.tittle}</td>
                <td className='border-2 border-zinc-800 h-[90px]'>{product.price}</td>
                <td className='border-2 border-zinc-800 h-[90px]'>
                  <input type="number" value={e.qte} min={1} readOnly className="w-[100px] h-9 rounded-lg pl-2 pr-2 focus:outline-none product_color"/>
                </td>
                <td className='border-2 border-zinc-800 h-[90px]'>{product.price*e.qte}</td>
              </tr>
              )
             
            })
          }
          <tr className='card_color'>
            <td className='border-2 border-zinc-800 h-[90px]' colSpan={6}>
              <nav className='flex w-[90%] items-center justify-between relative left-1/2 -translate-x-1/2'>
                <div className='flex gap-5 items-center'>
                  <input type="text" name="" id="Codeinput" className='w-52 h-12 rounded-2xl product_color text-white pl-3 focus:outline-none' placeholder='Code Promo'/>
                  <button className='bg-orange-500 h-12 rounded-xl w-52 text-white transition-colors duration-500 hover:bg-white hover:text-orange-500 sh font-bold' onClick={Promocode}>Appliquer le code Promo</button>
                </div>
                {/* <button className='bg-orange-500 h-12 rounded-xl w-52 text-white transition-colors duration-500 hover:bg-white hover:text-orange-500 sh font-bold'>Mettre A Jour le Panier</button> */}
              </nav>
            </td>
          </tr>
        </table> 
        :<>
          <div className='w-[90%] card_color h-12 pt-2 pl-5 flex items-center border-t-4 border-blue-500'> 
            <i className="bi bi-window text-white"></i>
            <div className='flex items-center gap-5 ml-7 text-[18px] sm:text-[20px]'>
              <h1 className='text-white  font-bold'>Votre Panier est vide</h1>
              <i className="bi bi-emoji-smile-upside-down  text-orange-500"></i>
            </div>
             
          </div>
          <button className='w-44 sm:w-48 h-12 rounded-xl text-sm sm:text-md bg-orange-500 text-white font-bold self-start mt-6 ml-6 sm:ml-16 transition-colors duration-500 hover:bg-white sh hover:text-orange-500' onClick={()=> {navigate("/Keroumi-fitness/Store"),scrollTo({top:600,behavior:"smooth"})}}>retourne a la boutique</button>
        </> 
        
        
        }
      
        {/*  table for medium screen and less  */}
       {
        card.length > 0 ?
              <table className={`w-[95%] ${visible_table.medium_table}`}>
             {
              card.map(function(e){
                let product = DataBase.filter((prod)=>parseInt(prod.id) === e.prod)[0]
                return(
                 <>
                  <tr className='text-center border-2 h-16 border-zinc-800'>
                    <td>
                      <i className="bi bi-x-circle-fill text-[30px] cursor-pointer text-white transition-colors duration-500 hover:text-orange-500" onClick={()=>RemoveItem(product.id)}></i>
                    </td>
                  </tr>
                  <tr className='h-16 border-2 border-zinc-800'>
                    <td>
                      <div className='flex items-center justify-between pl-4 text-white font-bold '>
                        <p>Produit: </p>
                        <h1 className='text-[13px] ml-4'>{product.tittle}</h1>
                      </div>
                    </td>
                  </tr>
                  <tr className='h-16 border-2 border-zinc-800'>
                    <td>
                      <div className='flex items-center justify-between pl-4 pr-4 text-white font-bold '>
                        <p>Prix</p>
                        <h2>{product.price} Mad</h2>
                      </div>
                    </td>
                  </tr>
                  <tr className='h-16 border-2 border-zinc-800'>
                    <td>
                    <div className='flex items-center justify-between pl-4 pr-4 text-white font-bold '>
                        <p>Quantité</p>
                        <input type="number" value={e.qte} readOnly min={1} className="w-[100px] h-9 rounded-lg pl-2 pr-2 focus:outline-none product_color"/>
                      </div>
                    </td>
                  </tr>
                  <tr className='h-16 border-2 border-zinc-800'>
                    <td>
                    <div className='flex items-center justify-between pl-4 pr-4 text-white font-bold '>
                        <p>Sous-Total</p>
                        <h2>{product.price*e.qte} Mad</h2>
                      </div>
                    </td>
                  </tr>
                 </>
                )
              })
             }
              <tr className='border-2 border-zinc-800'>
                <td className='flex flex-col items-center gap-2 border-zinc-800'>
                  <input type="text" className='w-[90%] h-12 rounded-2xl product_color text-white pl-3 focus:outline-none' placeholder='Code Promo' id='Codeinput2'/>
                  <button className='bg-orange-500 h-12 rounded-xl w-[90%] text-white font-bold transition-colors duration-500 hover:bg-white hover:text-orange-500 sh' onClick={Promocode2}>Appliquer le code Promo</button>
                  {/* <button className='bg-orange-500 h-12 rounded-xl w-[90%] text-white font-bold transition-colors duration-500 hover:bg-white hover:text-orange-500 sh'>Mettre A Jour le Panier</button> */}
                </td>
              </tr>
        </table> 
       : "" }

      {
        card.length > 0 ? 
        <nav className='self-center md:self-end small_tablet:w-[550px] w-[90%] mr-0 small_tablet:mr-9 mt-20 h-96 flex flex-col gap-4'>
              <h1 className='text-white font-bold text-[30px] uppercase'>Total panier</h1>
              <div className='flex flex-col card_color rounded-xl'>
                <div className='flex justify-between w-full pl-10 pr-10 items-center self-center h-20  second_product text-[20px] font-bold text-white'>
                  <h2>Sous-Total : </h2>
                  <h3>{cardtot} Mad</h3>
                </div>
                <div className='flex justify-between w-full pl-10 pr-10 items-center self-center h-20 text-[20px] font-bold text-white'>
                  <h2>Total : </h2>
                  <h3>{promocode} Mad</h3>
                </div>
              </div>
              <button className='bg-orange-500 w-full h-12 rounded-2xl text-white font-bold mt-5 transition-colors duration-500 hover:bg-white hover:text-orange-500 sh' onClick={()=> {navigate("/Keroumi-fitness/Store/Checkout"),scrollTo({top:450,behavior:"smooth"})}}>Valider La commande</button>
        </nav> 
        : "" 
      } 
    </section>
  )
}

export default Card