const express = require("express");
const router = express.Router();

const db = require("./../models");

// define our api routes

router.get("/api/workouts", (req, res) => {
    const size = req.query.size;

    // sum
    // average
    const aggregatePayload = [
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                },
            },
        },
    ];

    if (size !== undefined) {
        // we want to limit result first before applying $sum
        aggregatePayload.unshift({
            $limit: Number(size),
        });
    }

    // return an array of workouts
    db.Workout.aggregate(aggregatePayload).then((result) => {
        res.json(result);
    });
});

router.put("/api/workouts/:id", function (req, res) {
    // find and update the workout
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body,
            },
        },
        { new: true }
    ).then((updated) => {
        res.json(updated);
    });
});

router.post("/api/workouts", function (req, res) {
    db.Workout.create({}).then((created) => {
        res.json(created);
    });
});

module.exports = router;
