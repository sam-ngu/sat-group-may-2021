const express = require("express");

const router = express.Router();

// login
router.get("/", function (req, res) {
    res.render("home");
});


module.exports = router;
