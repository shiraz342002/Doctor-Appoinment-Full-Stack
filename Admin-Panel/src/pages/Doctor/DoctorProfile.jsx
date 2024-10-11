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
  return (
    <div>DoctorProfile</div>
  )
}

export default DoctorProfile