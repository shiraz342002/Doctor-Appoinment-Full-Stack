import React, { useState } from 'react';
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    const [showmenu,setShowMenu]=useState(false)
    const [token,setToken] =useState(true)
  return (
    <div className='flex items-center justify-between text-md py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-[#5F6FFF] w-4/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-[#5F6FFF] w-4/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-[#5F6FFF] w-4/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-[#5F6FFF] w-4/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4 '>
      {
        token
        ?<div className='flex item-center gap-2 cursor-pointer group relative'>
            <img className='w-8 border-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-5'>
                    <p onClick={()=>navigate("/myprofile")} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate("/myappointments")} className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p onClick={()=>setToken(false)}  className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>
        </div>:
        <button onClick={()=>navigate('/login')} className='bg-[#5F6FFF] text-white px-7 py-3 rounded-full font-light  hidden md:block'>
          Create Account
        </button>
      }
      </div>
    </div>
  );
};
export default Navbar;