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

  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit ? <input value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} type="text" /> :
          <p>{userData.name}</p>
      }
      <hr />
      <div>
        <p>Contact Information</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit ?
              <input value={userData.phono} onChange={(e) => setUserData(prev => ({ ...prev, phono: e.target.value }))} type="text" />
              : <p>{userData.phono}</p>
          }
          <p>Address:</p>
          {
            isEdit ?
              <p>
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p> 
          }
        </div>
      </div>
      <div>
        <p>Basic Information</p>
        <div>
          <p>Gender:</p>
          {
            isEdit ? <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> :
              <p>{userData.gender}</p>
          }
          <p>Birthday:</p>
          {
            isEdit ? <input type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p>{userData.dob}</p>
          }

        </div>
      </div>
      <div>
        {
          isEdit?
          <button onClick={()=>setIsEdit(false)}>Save Information</button>
          :<button onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile
