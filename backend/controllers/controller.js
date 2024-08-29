const Workout = require('../models/workouts');
const mongoose = require('mongoose');

const getWorkouts = async (req,res) => {

    //Find all with empty braces

    const user_id = req.user._id;


    const workouts = await Workout.find({user_id}).sort({createdAt: -1})

    res.status(200).json(workouts);
    
} 

const getWorkout = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no suck workout"});
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return response.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout);
}

const createWorkout = async (req,res) =>{

    const {title, load, reps, day} = req.body;

    let emptyFields = [];

    if(!title){
        emptyFields.push('title');
    }
    if(!load){
        emptyFields.push('load');
    }
    if(!reps){
        emptyFields.push('reps');
    }
    if(!day){
        emptyFields.push('day');
    }

    if(emptyFields.length>0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
    }

    //add doc to db
    try{

        const user_id = req.user._id;
        const workout = await Workout.create({
            title: title,
            load: load,
            reps: reps,
            user_id: user_id,
            day: day,
        })

        res.status(200).json({workout});
    } catch(error){
        res.status(400).json({error: error.message});
    }

}

const deleteWorkout = async (req,res) => {

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "There is no such workout to delete"});
    }

    const deleted = await Workout.findOneAndDelete({_id: id});

    if(!deleted){
        return res.status(400).json({error: "No such workout"});
    }

    res.status(200).json(deleted);
}

const updateWorkout = async (req,res) => {

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "There is no such workout to update"});
    }


    const updated = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!updated){
        return res.status(400).json(updated);
    }

    res.status(200).json(updated);
} 



module.exports = {getWorkouts, createWorkout, getWorkout, deleteWorkout, updateWorkout}