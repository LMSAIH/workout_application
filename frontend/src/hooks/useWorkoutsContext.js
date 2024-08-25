import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext);

    if(!context){
        throw Error("use workout context must be used inside a workouts context provider");
    }
    
    return context;
}