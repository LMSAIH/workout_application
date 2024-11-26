import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

//authcontext custom hool provider 
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw Error('useAuthContext must be used inside the AuthContextProvider');
    }

    return context;
} 