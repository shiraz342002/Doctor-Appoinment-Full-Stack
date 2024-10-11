import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

const DoctorProfile = () => {
  const {dToken,profileData,setProfileData,getDoctorProfile,backendUrl}=useContext(DoctorContext)
  const {currency}=useContext(AppContext)

  useEffect(()=>{
    if(dToken){
      getDoctorProfile()
    }
  },[dToken])
  return profileData && (
    <div>
      <div>
        <div>
          <img src={profileData.image} alt="" />
        </div>
        <div>
          {/* displaying doc info */}
          <p>{profileData.name}</p>
          <div>
          <p>{profileData.degree} {profileData.speciality}</p>
          {/* <button>{profileData.experiance}</button> */}
          </div>
          {/* doc about */}
          <div>
            <p>About:</p>
            <p>{profileData.about}</p>
          </div>

          <p>Appointment fee: <span>{currency} {[profileData.fees]}</span></p>
          
          <div>
            <p>Address:</p>
            <p>
                {profileData.address.line1}
                 <br />
                {profileData.address.line2}
            </p>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="">Available</label>
          </div>
          <button>Edit</button>
            
              
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile