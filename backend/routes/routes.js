const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Workout = require("../models/workouts");
const controller = require("../controllers/controller");

//get all workouts
router.get("/", controller.getWorkouts);

//get single workout
router.get("/:id", controller.getWorkout);

//Post a new workout
router.post("/", controller.createWorkout);

//delete workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

//update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});



module.exports = router;
