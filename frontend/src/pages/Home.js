import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import WorkoutLister from "../components/WorkoutLister";
import WorkoutAdd from "../components/WorkoutAdd";

const Home = () => {
  // const [workouts, setWorkouts] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts",{
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        console.log("updated");
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="Home">
      <h1> Your workouts </h1>
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutLister key={workout._id} workout={workout} />
          ))}
        <WorkoutAdd />
      </div>
    </div>
  );
};

export default Home;
