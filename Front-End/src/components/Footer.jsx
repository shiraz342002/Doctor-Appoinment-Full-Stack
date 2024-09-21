import React from 'react'
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col lg:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-based'>
        <div className='lg:col-span-1'>
          <img src={assets.logo} className='w-56' alt="Logo" />
          <p className='w-full md:w-2/3 md:font-medium  text-gray-600 leading-6 mt-4'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.          </p>
        </div>
        <div className=''>
          <p className='text-2xl font-medium mb-2'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='md:font-medium'>Home</li>
            <li className='md:font-medium'>About US</li>
            <li className='md:font-medium'>Delivery</li>
            <li className='md:font-medium'>Privacy Policy</li>
          </ul>
        </div>
       

        <div>
          <p className='text-2xl font-medium mb-2'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='md:font-medium '>0302323269</li>
            <li className='md:font-medium '>imshiraz007@gmail.com</li>
            <li className='md:font-medium '>@ShirazFabric</li>
          </ul>
        </div>
      </div>
      <div>
        <br />
        <hr />
        <p className='py-5 md:text-based text-center font-medium'>Copyright 2024@ ShirazFabric - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer