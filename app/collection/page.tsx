"use client"
import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'

const page = () => {
  return (
    <div className='collection-parent'>
        <h1 className='collect-head'>Designed and stiched by Sadia</h1>
        <div className='collect-img'>
          
        <div className='image-container'>
             <img className='image'
             src="/images/frock1.jpeg"
             alt="girl"/>
       
       <img className='image'
             src="/images/frock2.jpeg"
             alt="girl"/>
       
       <img className='image'
             src="/images/design4-pic.jpeg"
             alt="girl"/>
       </div>

       <div className='image-container'>
             <img className='image'
             src="/images/frock3.jpeg"
             alt="girl"/>
       
       <img className='image'
             src="/images/frock6.jpeg"
             alt="girl"/>
       
       <img className='image'
             src="/images/frock7.jpeg"
             alt="girl"/>
       </div>

       <div className='image-container'>
             <img className='image'
             src="/images/design1-pic.jpeg"
             alt="girl"/>
       
       <img className='image'
             src="/images/frock5.jpeg"
             alt="girl"/>
       
       <img className='image'
             src="/images/frock8.jpeg"
             alt="girl"/>
       </div>

          
            
           
           
        </div>
        
      
    </div>
    
  )
}

export default page;
