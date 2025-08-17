import React from 'react'
import folklyLogo from '../assets/logo5.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex w-full h-16 bg-[#433C35] shadow-[0_4px6px-1px_rgba(0,0,0,0.1)] justify-between align-middle items-center'>
      <div className='flex w-full items-center h-full'>
        <img src={folklyLogo} className='h-12'/>
      </div>

      <div className='text-white flex items-center gap-4'>
        <Link to={"/Features"}>Features</Link>
        <Link to={"/Community"}>Community</Link>
        <Link to={"/Events"}>Events</Link>
        <Link to={"/Creators"}>Creators</Link>
      </div>
    </div>
  )
}

export default Header
