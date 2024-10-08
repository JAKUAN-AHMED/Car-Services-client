import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {User,Loader}=useAuth();
    const location=useLocation();
    // console.log(location)
    if(Loader)
    {
        return (
          <div className="text-center">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        );
    }
    if(User?.email)
    {
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/login'} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;