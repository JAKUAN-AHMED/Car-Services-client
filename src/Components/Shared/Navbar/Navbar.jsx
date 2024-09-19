import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import logo from '../../../assets/logo.svg';
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  const {User,LogOut}=useAuth();
  const handleLogOut=()=>{
    LogOut()
    .then(()=>{})
    .catch(error=>console.error(error.message))
  }
    const links=<>
    <li>
        <NavLink to={'/'}>Home</NavLink>
    </li>
    <li>
        <NavLink to={'/about'}>About</NavLink>
    </li>
    {User?.email?
    <>
    <li><NavLink to={'/bookings'}>My Bookings</NavLink></li>
    <li><button onClick={handleLogOut}>Log Out</button></li>
    </> 
    :
    <li>
      <NavLink to={'/login'}>Login</NavLink>
    </li>}
    
    </>
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  shadow"
            >
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost w-[100px]">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end  gap-2">
            <a className="btn border-t-green-300 bg-slate-100 pl-2">
                <CiSearch className="text-2xl font-extrabold"></CiSearch>
            </a>
          <a className="btn btn-square bg-yellow-200 text-black w-[100px] h-[50px]p-1">Appointment</a>
        </div>
      </div>
    );
};

export default Navbar;