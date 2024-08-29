import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from "react-router-dom";


export const useLogIn = () =>{

    const [error,setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const login = async (email, password) => {

        setIsLoading(true);

        const response = await fetch('/api/user/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        });

        const json = await response.json();

        console.log(json);

        if(!response.ok){
            
            setIsLoading(false);
            setError(json.error);
            console.log(json.error);
        }

        if(response.ok){
            setIsLoading(false);
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type:'LOGIN', payload: json})
            navigate('/');
        
        }

    }

    return {login, error, isLoading }
}