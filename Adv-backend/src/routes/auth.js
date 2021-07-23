const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const {signup,googlelogin,inforegister}=require("../controller/auth")

router.post("/signin", (req, res) => {

});

router.post("/signup",signup);
router.post("/googlelogin",googlelogin);
router.post("/inforegister",inforegister);

module.exports = router;
