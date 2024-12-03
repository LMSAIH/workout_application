import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

//logout ook to depose of the load 
export const useLogout = () => {

    const {dispatch} = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutsContext();

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        //Clears workout data after logging out
        workoutsDispatch({type: 'SET_WORKOUTS', payload:null})
    }

    return { logout }

    
}