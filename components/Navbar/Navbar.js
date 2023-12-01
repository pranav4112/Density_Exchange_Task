import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.3
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{once:true}}
        className='md:px-56 px-6 flex justify-between items-center w-full pt-2 '>

        <Image
        src='/Images/logo.png'
        width={55}
        height={55}
        alt="Logo"
        style={{cursor:'pointer'}}
        />

      <div className='md:flex justify-center items-center hidden'>
        <a className='mr-10 font-semibold text-[#5e5e5e]' href="./">Emotions</a>
        <a className='mr-10 font-semibold text-[#5e5e5e]' href="./">Manifesto</a>
        <a className='mr-10 font-semibold text-[#5e5e5e]' href="./">Self-Awareness Test</a>
        <a className='mr-10 font-semibold text-[#5e5e5e]' href="./">Work With Us</a>

      </div>

      <motion.button 
      initial={{ scale:0, opacity: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.4
      }}
      whileInView={{ scale: 1,opacity: 1 }}
      viewport={{once:true}}
      className='flex justify-center items-center bg-[#212020] duration-300 rounded-[50px] text-[#e6e4e4] px-5 py-3 font-medium cursor-pointer shadow-sm shadow-gray-500'>
        Download app
      </motion.button>

      </motion.nav>
    </>
  )
}

export default Navbar