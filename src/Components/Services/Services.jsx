import { useState } from "react";
import Card1 from "../../Cards/Card1/Card1";
import useServices from "../../hooks/useServices";
const Services = () => {
  const [asc, setAsc] = useState(true);
  const [search,setSearch]=useState(undefined)
  
  const handleSearch=e=>{
    e.preventDefault();
    console.log(e.target.search.value)
    setSearch(e.target.search.value);
  }
  const Data = useServices(asc,search);
  return (
    <div className="flex flex-col mt-4 mb-12">
      <div className="flex flex-col space-y-4 text-center">
        <h2 className="text-2xl font-bold text-orange-400">Services</h2>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
       <form className="border-2 border-purple-100 shadow-md h-[100px] flex items-center justify-center m-2 p-2" onSubmit={handleSearch}>
        <input type="text" name="search" id="" className="border-2 border-gray-800" />
        <input type="submit" value="Search" className="bg-gray-600 w-[150px] h-[30px] ml-2 text-white" />
       </form>
        <p>
          <button
            onClick={() => setAsc(!asc)}
            className="btn btn-secondary bg-blue-400 text-white hover:bg-gray-800"
          >
            {asc ? "Price : High to Low " : "Price : Low to High"}
          </button>
        </p>
        <p className="w-3/4 ml-16">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
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
