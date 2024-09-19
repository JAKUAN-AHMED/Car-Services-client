import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useServices = () => {
   const [Data,setData]=useState([]);
   const axiosSecure=useAxiosSecure();
   useEffect(()=>{
    axiosSecure.get("/services")
    .then((res) => setData(res.data));
   },[axiosSecure])
   return Data;
};

export default useServices;