"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"

const Header = () => {
     const[isMenuOpen ,setIsMenuOpen]=useState(false)

     const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
     }
    



  return (
    <div className='main'>
        
        <h1 className='header-h1'>Kids Collection By Sadia Alamdaar</h1>
        

      

        {/* navbar desktop */}
        <nav className=' header-nav'>
            <Link href="/" className='link' target="_blank" >Home</Link>
            <Link href="./about"  className='link'target="_blank">About</Link>
            <Link href="./collection" className='link' target="_blank">Collection</Link>
            <Link href="./contact" className='link' target="_blank">Contact</Link>
        </nav>


        <div className='hide-on-lg' onClick={toggleMenu}>
            {isMenuOpen ?<AiOutlineClose size={30}/>:
            <AiOutlineMenu size={30}/>

            }</div>

        {/* mobile navbar */}
       {
        isMenuOpen && (
           <nav className='header-mob-nav'>
            <Link href="/" className='link' onClick={toggleMenu}>Home</Link>
            <Link href="./about"  className='link' onClick={toggleMenu}>About</Link>
            <Link href="./collection" className='link' onClick={toggleMenu}>Collection</Link>
            <Link href="./contact"  className='link' onClick={toggleMenu}>Contact</Link>
            </nav>
        )
       }
        
      
    </div>
  )
};

export default Header
