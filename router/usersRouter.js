// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");

const router = express.Router();

// login page
router.get("/", getUsers);

// exports
module.exports = router;
