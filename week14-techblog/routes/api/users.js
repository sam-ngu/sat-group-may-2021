const express = require("express");
const { User } = require("../../models");
const router = express.Router();

// crud

router.post("/users", async function (req, res) {
    try {
        const { name, email, password } = req.body;
        const userData = await User.create({
            name,
            email,
            password,
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// login
router.post("/users/login", async function (req, res) {
    try {
        const userData = await User.findOne({
            where: { email: req.body.email },
        });

        if (!userData) {
            res.status(400).json({
                message: "Incorrect email or password, please try again",
            });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: "Incorrect email or password, please try again",
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: "You are now logged in!" });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// logout
router.get("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

// register

module.exports = router;
