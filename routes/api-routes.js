const db = require('../models')

module.exports = (app)=>{

    app.get("/api/workouts", (req,res)=>{
        db.Workout.find({}, (err,workouts)=>{
            if(err){
                console.log(err)
            } else {
                res.json(workouts)
            }
        })
    })

    app.put("/api/workouts/:id", (req,res)=>{

    })

    app.post('/api/workouts', (req,res) => {
        
    });


}