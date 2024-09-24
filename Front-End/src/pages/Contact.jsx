import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div className=''>
      <div className='text-center text-3xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-10 justify-center mt-10'>
        <img  className='w-full md:max-w-[360px]'src={assets.contact_image} alt="" />
        <div className='text-gray-700  flex flex-col mt-5'>
          <b className='text-lg text-gray-600 mb-4'>OUR OFFICE</b>
          <p>1540 W Compton Avenue</p>
          <p>Suite no 340 Los Angeles California</p>
          <br />
          <p>Tel: (415) 555‑0132</p>
          <p>Email: imshiraz007@gmail.com</p>
          <br />
          <b className='text-lg text-gray-600 mb-4'>Careers at PRESCRIPTO</b>
          <p>Learn more about our teams and job openings.</p>
          <br />
          <button className='border w-[140px]  py-4 border-black hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
