import { useEffect, useState } from "react";
import Card1 from "../../Cards/Card1/Card1";

const Services = () => {
    const [Data,setData]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
      <div className="flex flex-col mt-4 mb-12">
        <div className="flex flex-col space-y-4 text-center">
          <h2 className="text-2xl font-bold text-orange-400">Services</h2>
          <h2 className="text-5xl font-bold">Our Service Area</h2>
          <p className="w-3/4 ml-16">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {Data.map((service) => (
            <Card1 key={service._id} service={service}></Card1>
          ))}
        </div>
      </div>
    );
};

export default Services;