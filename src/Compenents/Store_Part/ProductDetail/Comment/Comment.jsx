import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { Form } from 'react-router-dom'
import Swal from 'sweetalert2'
import { shareProductDetails } from '../../../../Contexts/ProductDetails'
import Data from '../../Product-Data/Data'

const Comment = (props) => {
  // this import for testing if the Data imported from database is working well
  let {DataBase,setDataBase} = useContext(shareProductDetails)
  let [length,setlength] = useState(0)
  let [inputs,setinputs] = useState({
    name : "",
    email : "",
    avis : ""
  })
// this function it's for handling the change in the inputs field
  const handlechange = (event)=>{
    let {name,value} = event.target;
    setinputs({...inputs,[name] : value})
    // console.log(inputs)
  }
//   this function for handling the submit event 
  const handlesubmit = (event)=>{
    event.preventDefault();
    let check = 0
    Object.keys(inputs).map((input)=>{
       let current = inputs[input]
       if (current === "") {
            toast.error(`the ${input} field is required`)
       }else{
        check++
       }

       if (check === 3) {
        const sendform = new FormData()
        sendform.append("nom",inputs.name)
        sendform.append("email",inputs.email)
        sendform.append("avis",inputs.avis)
        sendform.append("id",parseInt(props.id))
        axios.post("http://localhost:80/MY_PROJECTS/KeroumiDash/comment",sendform).then((res)=>{
            axios.get(`http://localhost:80/MY_PROJECTS/KeroumiDash/comment?prod_id=${parseInt(props.id)}`).then((res)=>{
                props.state_fun(res.data)
                Swal.fire({
                    position:"center",
                    icon:"success",
                    title:"your comment is successfuly added",
                    showConfirmButton: true,
                    timer:1500,
                })
                 setinputs((prev)=>{
                    return{
                        ...prev,
                        name : "",
                        email : "",
                        avis : "",
                    }
                })
            })  
        })
       }
    })
  }


// this function for prevent the user when lenght of the text field it's more than 100

const preventwrite = (event)=>{
    let text = document.getElementById("text").value
    let count = text.length
    setlength(count)
    if (!['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        // Prevent writing if the key pressed is not allowed
        if (text.length >= 100) {
          event.preventDefault();
        }
    }
}
const AllComments  = props.state.map((comment)=>{
            return(
                 <div className='bg-zinc-700 border-2 border-zinc-950 rounded-md space-y-2 pl-5 pt-2 pb-2'>
                    <div className='flex items-center gap-8'>
                        <h2 className='text-orange-500 text-[12px] md:text-[15px]'>{comment.Nom}</h2>
                        <p className='text-[10px] md:text-[15px]'>{comment.date}</p>
                    </div>
                    <p className='w-[90%] text-[10px] md:text-[15px]'>{comment.message}</p>
                </div>
            )
               
            })
  return (
    <div className='mt-5  text-white  w-full flex justify-center items-center'>
        <nav className='w-[90%] h-auto pl-0 md:pl-5 flex flex-col gap-5'>
            <div className='h-auto space-y-3 '>
                <h1 className='text-[20px] text-white font-bold'>Avis</h1>
                <div className='space-y-3 min-h-auto max-h-[400px] overflow-y-auto'>
                    {AllComments.length === 0 ? <div>
                        <p className='text-zinc-700'>Aucun commentaire pour l'instant </p>
                    </div> : AllComments}
                </div>
            </div>

            <div className='flex flex-col  gap-7'>
                <h1 className='text-[12px] md:text-md'>Soyez le premier à laisser votre avis sur "{props.tittle}"</h1>
                <form className='flex flex-col gap-6' onSubmit={handlesubmit}>
                    <p className='text-gray-500'>All fields marked with an asterisk (*) are required</p>
                    <div className='flex flex-col gap-3'>
                        <label  className='text-gray-500'>Nom *</label>
                        <input type="text" name="name" value={inputs.name} id="" className='h-12 rounded-md mr-2 focus:outline-none bg-zinc-600 pl-4 text-white' onChange={handlechange}/>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label  className='text-gray-500'>E-mail *</label>
                        <input type="email" name="email" value={inputs.email} id="" className='h-12 rounded-md mr-2 focus:outline-none bg-zinc-600 pl-4 text-white' onChange={handlechange}/>
                    </div>
                    {/* <div className='flex items-center gap-3'>
                        <p className='text-gray-500'>Votre note * </p>
                        <div className='flex items-center gap-1'>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                        </div>
                    </div> */}
                    <div className='flex flex-col gap-3'>
                        <p className='text-gray-500'>Votre avis *</p>
                       <textarea name='avis' id='text' value={inputs.avis} className='min-h-20 max-h-28  rounded-md mr-2 focus:outline-none bg-zinc-600 pl-4 pt-4 text-white' onChange={handlechange} onKeyDown={preventwrite}></textarea>
                       <p> <span>{length}</span> / 120</p>
                    </div>
                    <button type='submit' className='w-36 h-12 bg-orange-500 rounded-lg text-white mb-2 font-bold transition-all duration-500 hover:bg-white hover:text-orange-500 sh'>Post Comment</button>
                </form>
            </div>

        </nav>
    </div>
  )
}

export default Comment