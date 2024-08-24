const Workout = require('../models/workouts');

const getWorkouts = async (req,res) => {

    //Find all with empty braces
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts);
    
} 

const getWorkout = async (req,res) =>{
    const {id} = req.params;

    const workout = await Workout.findById(id)

    if(!workout){
        return response.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout);
}

const createWorkout = async (req,res) =>{

    const {title, load, reps} = req.body;

    //add doc to db
    try{

        const workout = await Workout.create({
            title: title,
            load: load,
            reps: reps,
        })

        res.status(200).json({workout});
    } catch(error){
        res.status(400).json({error: error.message});
    }

}



module.exports = {getWorkouts, createWorkout, getWorkout}