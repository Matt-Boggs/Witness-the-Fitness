const express = require("express");
const logger = require('morgan');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesswitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = require('./models/index')
const path = require('path');

app.get("/",(req,res)=>{
    console.log("MAIN DING")
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("/exercise", (req,res) => {
  console.log("exercise DING")
  res.sendFile(path.join(__dirname, "./public/exercise.html"))
});

app.get("/stats", (req,res) => res.sendFile(path.join(__dirname, "./public/stats.html")));


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

app.put("/api/workouts/:id", (req,res)=>{
  db.Workout.findOneAndUpdate(
    {_id: req.params.id},
    {$push: {exercises: req.body}},
    {upsert: true, useFindandModify:false},
    (workoutUpdate)=>{
      res.json(workoutUpdate)
    }
    )
})

app.post("/api/workouts", (req,res) => {
  db.Workout.create(req.body).then(newWorkout => {
      res.json(newWorkout);
  });
});

// routes
// app.use(require("./routes/html-routes.js"));
// app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
