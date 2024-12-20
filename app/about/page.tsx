"use client"
import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'

const About = () => {
  return (
  
      <div className='about'>
        
        <h1 className='about-heading'>About Me</h1>
        <p className='about-para'>I am Sadia.My work about kids collection is newly.I have interested in stiching kids cloth and design by own itself,that blends style,creativity,comfort for children.Designed with love and attention to detail,the collection showcases vibrant colors,playful patterns and durable fabrics that cater to the active lifestyles of kids.Each piece reflects for creating clothing that not only look great but feels great too.From casual outfits to special ocassion wear,Kids Collection offers versatile designs that bring joy to kids and peace of mind to parents and also my mind rexalable for my own handmade stiching cloths.Sewing machine and threads,scissors and etc are the main tools to stich clothes.</p>

        <div className='about-image'>
          <Image
          src={"/images/tool1.jpeg"}
          alt="tool"
          width={400}
          height={500}/>
           <Image
          src={"/images/tool2.jpeg"}
          alt="tool"
          width={350}
          height={500}/>
        </div>
        </div>
        
    
  )
}

export default About

