import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import AddImg from '../images/add.svg';

const WorkoutAdd = () => {

  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = {
      title: title,
      reps: reps,
      load: load,
    };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }


    if (response.ok) {
      setError(null);
      console.log(json.workout._id);
      setLoad("");
      setTitle("");
      setReps("");
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload:json.workout})   
     
    }
  };
  return (
    <div className="addWorkout">
      <form className="newWorkout" onSubmit={handleSubmit}>
        <div className="formContent">
          <h3> Add new workout </h3>
          <label> Exercise name </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className = {emptyFields.includes('title') ? 'inpError' : ''}
          ></input>
          <label> Repetitions </label>
          <input
            type="number"
            value={reps}
            onChange={(e) => {
              setReps(e.target.value);
            }}
            className = {emptyFields.includes('reps') ? 'inpError' : ''}
          ></input>
          <label> Load in kilograms </label>
          <input
            type="number"
            value={load}
            onChange={(e) => {
              setLoad(e.target.value);
            }}
            className = {emptyFields.includes('load') ? 'inpError' : ''}
          ></input>
        </div>
        <button className = "add" ><img src = {AddImg} alt = "addimg"></img> </button>
        {error && <div className="error"> {error} </div>}
      </form>
    </div>
  );
};

export default WorkoutAdd;
