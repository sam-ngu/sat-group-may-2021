const express = require('express')
const router = express.Router();

const db = require('./../models')

// define our api routes

router.get('/api/workouts', (req, res) => {

    // return an array of workouts
    db.Workout.aggregate([{
        "$addFields": {            
            "totalDuration": {
                "$sum": "$exercises.duration"
            }
        }
    }]).then((result) => {
        console.log(result);
        res.json(result)
    })


})


router.put('/api/workouts/:id', function(req, res){

    // find and update the workout
    db.Workout.findByIdAndUpdate(req.params.id, {
        "$push": {
            "exercises": req.body
        }
    }, {new: true})
    .then((updated) => {
        res.json(updated);
    })

});

router.post('/api/workouts', function(req, res){
    db.Workout.create({})
    .then((created) => {
        res.json(created);
    })
});

module.exports = router;