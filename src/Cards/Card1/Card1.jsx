import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Card1 = ({service}) => {
    const {
        _id,
        img,
        description,
        price,
        title
    }=service;
    return (
      <div className="card bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body flex">
          <h2 className="card-title">{title}</h2>
          <p>
            {" "}
            <span className="text-red-400">Description : </span>
            {description.slice(0, 80)}
          </p>
          <p>
            <span className="text-red-400">Price : </span> {price}$
          </p>
          <div className="card-actions">
            <button className="btn btn-square bg-orange-400">
              <Link to={`/checkout/${_id}`}>
                <IoIosArrowRoundForward className="text-3xl"></IoIosArrowRoundForward>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Card1;