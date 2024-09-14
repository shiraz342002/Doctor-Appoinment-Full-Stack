import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-[#5f6FFF]'>
      {/* left */}
      <div className='md:w-1/2 flex flex-col items-center justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p>Book Appointment <br />
        With Trusted Doctors</p>
      </div>
      <div>
        <img src={assets.group_profiles} alt="" />
        <p>Simply browse through our extensive list of trusted doctors,
        <br /> schedule your appointment hassle-free.</p>
      </div>
        <a href="">Book appointment <img src={assets.arrow_icon} alt="" /></a>
      {/* right */}
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
