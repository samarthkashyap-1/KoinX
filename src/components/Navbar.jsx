import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-white h-20 '>
        <div className="logo flex">
            <img src={logo} className=' my-auto ' alt="Koinx Logo" />
        </div>
        <ul className='flex gap-10 text-base font-semibold my-auto'>
          <li><a href="/">Crypto Taxes</a></li>
          <li><a href="/">Free Tools</a></li>
          <li><a href="/">Resource Center</a></li>
          <li><a href="/" className='text-white text-lg bg-[#2870EA] py-2 px-4 rounded-lg'>Get Started</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
