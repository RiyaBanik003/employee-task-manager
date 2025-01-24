import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='py-7 px-10 bg-pink-800 text-black font-extrabold flex items-center justify-between'>
        
        <h2 className='text-2xl'>Riya</h2>

        <div className='flex gap-10'>
            <Link className='text-xl underline' to="/">Home</Link>
            <Link className='text-xl underline' to="/about">About</Link>
            <Link className='text-xl underline' to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Header