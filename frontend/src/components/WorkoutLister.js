import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
const WorkoutLister = ({ workout }) => {

  const { user } = useAuthContext();
  const {dispatch} = useWorkoutsContext();

  const deleteWorkout = async () => {

    if(!user){
      return
    }

    const response = await fetch(`/api/workouts/${workout._id}`,{
      method: "DELETE",
      headers: {
         'Authorization': `Bearer ${user.token}`
      }
    });

    const json = await response.json();

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json});
    }

  }

  return (
    <div className="workout">
      <div className="leftglow"></div>
      <div className="borderglow"></div>
      <h3 className="workoutname"> {workout.title}</h3>

      <div className="workoutContent">
        <p> {workout.reps} repetitions</p>
        <p> {workout.load} kg </p>
        <div className="svgContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="trash"
            viewBox="0 0 16 16"
            onClick={deleteWorkout}
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorkoutLister;
