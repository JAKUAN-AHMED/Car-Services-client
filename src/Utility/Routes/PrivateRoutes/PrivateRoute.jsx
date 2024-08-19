import { useContext } from "react";
import { AuthContext } from "../../Provider/ProviderContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {User,Loader}=useContext(AuthContext);
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
        <Navigate to={'/login'} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;