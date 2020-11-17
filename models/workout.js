const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now() // this is set later on
    },
    exercises: [
        {
            type: {
              type: String,
              trim: true
            },
            name: {
              type: String,
              trim: true
            },
            distance: {
              type: Number
            },
            duration: {
              type: Number
            },
            weight: {
              type: Number
            },
            reps: {
              type: Number
            },
            sets: {
              type: Number
            }
            // performed: Boolean
          }
    ] 
},{
  toJSON: {virtuals: true}
});

// WorkoutSchema.virtual("totalDuration").get(()=>{
//   return this.exercises.reduce((acc,curVal)=> acc + curVal.duration, 0)
// });

const Workout = mongoose.model("Workout", WorkoutSchema);



module.exports = Workout