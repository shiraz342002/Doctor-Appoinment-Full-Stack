import { createContext, useState, useTransition } from "react";
import axios from "axios"
import {toast} from "react-toastify"

export const DoctorContext = createContext()
const DoctorContextProvider=(props)=>{

const backendUrl=import.meta.env.VITE_BACKEND_URL
const [dToken,setDToken]=useState(localStorage.getItem('dToken')?localStorage.getItem('dToken'):'')
const [appointments,setAppointments]=useState([])
const getAllDoctorAppointments=async()=>{
try {
   
    const {data}=await axios.get(backendUrl+'/api/doctor/appointments',{headers:{dToken}})
    console.log(data);
    if(data.success){
        setAppointments(data.appointments.reverse())
        // console.log(data.appointments);
    }else{
        toast.error(data.message)
    }

} catch (error) {
    console.log(error);
    toast.error(error.message)
}

}



const value={
    setDToken,
    dToken,
    backendUrl,
    getAllDoctorAppointments,
    appointments,
    setAppointments
}
return(
    <DoctorContext.Provider value={value}>
        {props.children}
    </DoctorContext.Provider>
)
}

export default DoctorContextProvider