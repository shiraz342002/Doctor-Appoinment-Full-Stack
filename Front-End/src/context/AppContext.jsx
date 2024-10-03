import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {toast} from "react-toastify"
import axios from "axios"


export const AppContext = createContext()
const AppContextProvider=(props)=>{
const [doctors,setDoctors]=useState([])
const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
const currencySymbol='$'
const backendUrl=import.meta.env.VITE_BACKEND_URL
const getAllDoctors=async()=>{
    try {        
        console.log("getDoctors");
        
        const {data} = await axios.get(backendUrl+'/api/doctor/list')
        if(data.success){
            setDoctors(data.doctors)
            // console.log(data.doctors);
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
        console.log(error);
        
    }
}
useEffect(()=>{
    getAllDoctors()
},[])

    const value ={
        currencySymbol,
        doctors,
        getAllDoctors,
        token,
        setToken,
        backendUrl
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider