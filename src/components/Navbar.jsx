import React from 'react'
import Logo  from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-2 border-b-2 border-[#393e46]">
        <img className="h-12" src={Logo} alt='Logo'/>
    </div>
  )
}

export default Navbar