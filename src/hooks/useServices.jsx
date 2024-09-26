import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc,search) => {
   const [Data,setData]=useState([]);
   // const axiosSecure=useAxiosSecure();
   useEffect(()=>{
    axiosSecure(`/services?sort=${asc? 'asc':'desc'}&search=${search}`)
    .then((res) => setData(res.data));
   },[asc,search])
   return Data;
};

export default useServices;