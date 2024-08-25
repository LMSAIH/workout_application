import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Link } from "react-router-dom";

import WorkoutLister from "../components/WorkoutLister";
import WorkoutAdd from "../components/WorkoutAdd";

const Home = () => {
  // const [workouts, setWorkouts] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        console.log("updated");
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="Home">
      <h1> Your workouts </h1>
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
           <WorkoutLister key={workout._id} workout={workout} />
          ))}
        <WorkoutAdd />

        {!workouts && (
          <h2 className="NoWorkouts">
            {" "}
            This seems to be empty... Let's get to work{" "}
            <Link to="/AddNew"> add a workout! </Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Home;
