import React from 'react';
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-between text-md py-4 mb-5 border-b border-b-gray-400'>
            <img className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
            <ul className='hidden md:flex items-start gap-5 font-semibold'>
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
            <div>

                <button onClick={()=>navigate("/login")} className='text-white bg-[#5F6FFF] px-8 py-3 rounded-full font-medium hidden md:block'>
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default Navbar;
