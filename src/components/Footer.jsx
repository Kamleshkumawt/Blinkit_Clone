import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaSquareThreads } from "react-icons/fa6";

function Footer() {
  return (
    <>
        <div className=' w-full h-96 '>
            <div className='flex  w-full h-96 px-20  mt-24 justify-evenly'>
                <div className='flex flex-col  w-96 h-80 -ml-20 '>
                    <h1 className='text-2xl font-medium'>Useful Links</h1>
                    <div className='flex'>
                        <div className='flex gap-28 text-xl font-normal text-slate-600 py-7'>
                            <div className='flex flex-col gap-2'>
                                <a href="#">About</a>
                                <a href="#">Careers</a>
                                <a href="#">Blog</a>
                                <a href="#">Press</a>
                                <a href="#">Lead</a>
                                <a href="#">Value</a>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <a href="#">Privacy</a>
                                <a href="#">Terms</a>
                                <a href="#">FAQs</a>
                                <a href="#">Security</a>
                                <a href="#">Mobile</a>
                                <a href="#">Contact</a>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <a href="#">Partner</a>
                                <a href="#">Franchise</a>
                                <a href="#">Seller</a>
                                <a href="#">Warechouse</a>
                                <a href="#">Deliver</a>
                                <a href="#">Resources</a>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='flex flex-col gap-5 text-xl font-light text-slate-700 '>
                    <h1 className='text-2xl  font-medium'>Categories <a href="#" className='text-lg font-normal text-green-500'>See all</a></h1>
                    <div className='flex gap-20 font-normal text-slate-600 '>
                        <div className='flex flex-col gap-2 '>
                            <a href="#">Vegetables & Fruits</a>
                            <a href="#">Cold Drinks & Juices </a>
                            <a href="#">Bakery & Biscuits </a>
                            <a href="#">Dry Fruits,Masala & Oil </a>
                            <a href="#">Paan </a>
                            <a href="#">Pharma & Wellness</a>
                            <a href="#">Ice creams & Frozen Desserts</a>
                            <a href="#">Beauty & Cosmetics</a>
                            <a href="#">Stationery Needs</a>
                            <a href="#">Print Store</a>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <a href="#">Vegetables & Fruits</a>
                            <a href="#">Cold Drinks & Juices </a>
                            <a href="#">Bakery & Biscuits </a>
                            <a href="#">Dry Fruits,Masala & Oil </a>
                            <a href="#">Paan </a>
                            <a href="#">Pharma & Wellness</a>
                            <a href="#">Ice creams & Frozen Desserts</a>
                            <a href="#">Beauty & Cosmetics</a>
                            <a href="#">Stationery Needs</a>
                            <a href="#">Print Store</a>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <a href="#">Vegetables & Fruits</a>
                            <a href="#">Cold Drinks & Juices </a>
                            <a href="#">Bakery & Biscuits </a>
                            <a href="#">Dry Fruits,Masala & Oil </a>
                            <a href="#">Paan </a>
                            <a href="#">Pharma & Wellness</a>
                            <a href="#">Ice creams & Frozen Desserts</a>
                            <a href="#">Beauty & Cosmetics</a>
                            <a href="#">Stationery Needs</a>
                            <a href="#">Print Store</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-24'>
                <h1 className='text-base font-medium text-slate-600 pl-20 pr-6'>© Blink Commerce Private Limited, 2016-2024</h1>
                <h1 className='text-xl font-semibold text-slate-600 pl-20 pr-6'>Download App</h1>
                <div className='flex w-32 gap-6'>
                    <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
                    <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
                </div>
                <div className='flex px-40 py-5 gap-2'>
                   <a href="#" className='text-5xl rounded px-2'> <FaFacebook /> </a>
                    <a href="#" className='text-5xl rounded px-2'><AiFillTwitterCircle /> </a>
                    <a href="#" className='text-5xl rounded px-2'><FaInstagramSquare />  </a>
                    <a href="#" className='text-5xl rounded px-2'><BiLogoLinkedinSquare /> </a>
                    <a href="#" className='text-5xl rounded px-2'><FaSquareThreads />  </a>

                </div>
            </div>
            <div className='text-lg text-slate-500 font-medium py-5 leading-6 px-48'>
                <h1>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</h1>
            </div>
        </div>
    </>
  )
}

export default Footer
