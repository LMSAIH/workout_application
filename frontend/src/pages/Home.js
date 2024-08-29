import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import WorkoutLister from "../components/WorkoutLister";
import WorkoutAdd from "../components/WorkoutAdd";
import WorkoutDays from "../components/WorkoutsByDay";

const Home = () => {
  // const [workouts, setWorkouts] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
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
      <div className="top">
        <h1> Your workouts </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="#000000"
        >
          <path
            d="M7 24l-1-2c-1.1 0-2 .9-2 2s.9 2 2 2l1-2zm37 0c0-1.1-.9-2-2-2l-1 2 1 2c1.1 0 2-.9 2-2zm-29-2h18v4H15z"
            fill="#000000"
          ></path>
          <path d="M14 10h-2c-1.1 0-2 .9-2 2H8c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-4 24H8V14h2v20zm4 2h-2V12h2v24zm26-24h-2c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h2c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2zm-4 24h-2V12h2v24zm4-2h-2V14h2v20z"></path>
        </svg>
      </div>
      <div className="workouts">
        {days.map((day) => {
          return (
            <WorkoutDays day={day} key={day}>
              <div className="dayWrapper">
                {" "}
                {workouts &&
                  workouts.map((workout) =>
                    workout.day === day ? (
                      <WorkoutLister key={workout._id} workout={workout} />
                    ) : (
                      <div></div>
                    )
                  )}
                <WorkoutAdd day={day} />
              </div>
            </WorkoutDays>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
