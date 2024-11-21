const mongoose = require('mongoose');

//Invoke the schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    title: {
        type:String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    },
    user_id:{
        type: String,
        required: true,
    },
    day:{
        type:String,
        required:true,
    }

}, {timestamps: true});

module.exports = mongoose.model('workout', workoutSchema);