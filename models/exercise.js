const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,  // this might be a problem
    name:{
        type: String,
        unique: true
    },
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
})
const Exercise = mongoose.model("Exercise", ExerciseSchema);


module.exports = Exercise