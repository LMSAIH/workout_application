const WorkoutLister = ({ workout }) => {
  return (
    <div className="workout">
      <div className="leftglow"></div>
      <div className="borderglow"></div>
      <h3 className="workoutname"> {workout.title}</h3>

      <div className="workoutContent">
        <p> {workout.reps} repetitions</p>
        <p> {workout.load} kg </p>
      </div>
    </div>
  );
};

export default WorkoutLister;
