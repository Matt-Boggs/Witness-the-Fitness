const db = require('../models')

module.exports = (app)=>{

    app.get("/api/workouts", (req,res)=>{
        db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout=>{
            console.log(dbWorkout)
            res.json(dbWorkout)
        })
        .catch(err=>{
            res.json(err)
        })
    })

    // app.put("/api/workouts/:id", (req,res)=>{
        
    // })

    app.post("/api/workouts", (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });


}