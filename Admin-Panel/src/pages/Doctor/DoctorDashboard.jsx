import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorDashboard = () => {
  const {getDashData,dashData,setDashData,dToken}=useContext(DoctorContext)

  useEffect(()=>{
    if(dToken){
      getDashData()
    }
  },[dToken])
  return dashData && (
    <div>DoctorDashboard</div>
  )
}

export default DoctorDashboard