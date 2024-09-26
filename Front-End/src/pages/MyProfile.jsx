import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [userData, setUserData] = useState({
    name: "Shiraz Mazhar",
    image: assets.profile_pic,
    email: "imshiraz007@gmail.com",
    phono: "0302 090078601",
    address: {
      line1: "1540 W Compton Avenue",
      line2: "Suite no 340 Los Angeles California"
    },
    gender: "Male",
    dob: "26 October 2004"
  })
//------------------------Styling To be Done --------------
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded ' src={userData.image} alt="" />
      {
          isEdit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} type="text" /> :
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit ?
              <input className='bg-gray-100 max-w-52' value={userData.phono} onChange={(e) => setUserData(prev => ({ ...prev, phono: e.target.value }))} type="text" />
              : <p className='text-blue-400'>{userData.phono}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit ?
              <p className=''>
                <input className='bg-gray-50 ' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p> 
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'>Gender:</p>
          {
            isEdit ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> :
              <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit ? <input className='max-w-80 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit?
          <button className='border px-8 py-2 rounded-full border-[#5F6FFF] hover:bg-[#5F6FFF] hover:text-white transition-all' onClick={()=>setIsEdit(false)} >Save Information</button>
          :<button className='border px-8 py-2 rounded-full border-[#5F6FFF] hover:bg-[#5F6FFF] hover:text-white transition-all'  onClick={()=>setIsEdit(true)} >Edit</button>
        } 
      </div>

    </div>
  )
}

export default MyProfile
