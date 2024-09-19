import { useContext } from "react";
import { AuthContext } from "../Utility/Provider/ProviderContext";

const useAuth = () => {
    const auth=useContext(AuthContext);
    return auth;
};

export default useAuth;