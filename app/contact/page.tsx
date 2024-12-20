"use client"
import React from 'react'
import Header from '../components/Header'

const page = () => {
  return (
    
    <div className='contact-parent'>
        <h1 className='con-head'>Contact For Me</h1>
       
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='input-field'
                    id="name" />

                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='input-field'
                    id="email"/>

                    <label htmlFor="message">Message</label>
                    <input type="text"
                    className='input-field2'
                    id="message"/>

                    <button className='Button'>send</button>

                    
                

      
    </div>
    
  )
}

export default page
