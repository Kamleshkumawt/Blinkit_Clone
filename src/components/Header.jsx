import React from 'react'
import { GrCart } from "react-icons/gr";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";




function Header() {
  

  return (
    <>
        <nav className=' w-full h-28 flex items-center justify-between px-4 drop-shadow-sm shadow-lg  fixed bg-slate-50 z-10'>
            <a href="#">
                <img src="./src/assets/BLINKIT LOGO.png" className='w-48' alt="" />
                </a>
            <div className='flex items-center justify-evenly px-5 gap-14'>
             <a href="#">
                <h1 className='text-2xl font-bold'>Delivery in 23 minutes</h1>
                <h5 className='flex items-center text-lg font-semibold'>1531, near Pratap Gaurav Kendr..<TiArrowSortedDown /></h5>
             </a>
             <div className='flex '>
              <p className='text-3xl -mr-10 py-4 font-extrabold z-20'> <CiSearch /> </p>
                <input type="text" className='w-[57rem] h-[4rem] px-14 rounded-2xl text-2xl bg-slate-100 ' name="search" placeholder='Search'/>
             </div>
             <button className='text-2xl px-5'> Login</button>
             <button className='flex items-center gap-2  bg-green-600 hover:bg-green-700  text-white px-5 py-5 rounded-lg text-xl font-bold' > 
                <h1 className='text-2xl hover:animate-bounce'><GrCart/> </h1>My Cart</button>
             </div> 
        </nav>
    </>
  )
}

export default Header
