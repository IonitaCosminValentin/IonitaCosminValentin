import React from 'react'
import { motion as m } from 'framer-motion'

const NavBar = () => {
  return (
    <m.div
      className='navbar'
      initial={{ top: '-100px' }}
      transition={{ duration: 0.3 }}
      animate={{ top: ['-50px', '20px', '0px'] }}
      viewport={{ once: true }}
    >
      <div className='container'>
        <a href='#intro'>Intro</a>
        <a href='#about'>About</a>
        <a href='#resume'>Resume</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </m.div>
  )
}

export default NavBar
