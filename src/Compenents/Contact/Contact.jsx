import React from 'react'
import { Local } from './Local'
import { ContactForm } from './ContactForm'
import { Footer } from '../Footer/Footer'

export const Contact = () => {
  return (
  <>
  <Local/>
  <ContactForm/>
  <Footer footer_responsive="top-[400px] small_tablet:top-[200px]" home="Keroumi/" About="Keroumi/About" Contact="" Protein="Protein" />
  </>
  )
}
