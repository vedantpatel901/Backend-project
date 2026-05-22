const express = require("express");

const router = express.Router();
const { Infocontroller } = require("../../controllers"); 

router.get("/info", (req, res) => {
    return res.json({ message: "this is the info route" });
});

module.exports = router; 