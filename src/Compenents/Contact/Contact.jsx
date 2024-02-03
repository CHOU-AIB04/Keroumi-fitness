import {React,useEffect} from 'react'
import { Local } from './Local'
import { ContactForm } from './ContactForm'
const Contact = ({onload})=>{
  useEffect(() => {
    // Simulating some asynchronous operation (e.g., API call)
    const fetchData = async () => {
      // Your actual data fetching logic goes here

      // Once the component is loaded, call the onLoad callback
      onload && onload();
    };

    fetchData();
  }, []);
  return (
  <>
  <Local/>
  <ContactForm/>
  
  </>
  )
}
export default Contact