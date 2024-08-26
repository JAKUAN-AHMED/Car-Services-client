import { Link } from "react-router-dom";

const Error = () => {
    return (
      <div className="text-center">
        <h2 className="text-4xl text-black font-semibold bg-yellow-200 text-center m-8">
          Not Found
        </h2>
        <button className="btn btn-ghost border rounded shadow-md text-black bg-yellow-200  w-[150px] h-[50px] text-center ">
          <Link to={'/'}>Home</Link>
        </button>
      </div>
    );
};

export default Error;