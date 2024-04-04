// external imports
const express = require("express");

// internal imports
const { getUsers, addUser } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const avatarApload = require("../middleware/common/users/avatarUpload");
const {
  addUserValidator,
  addUserValidationHandler,
} = require("../middleware/common/users/userValidator");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// upload avater
router.post(
  "/",
  avatarApload,
  addUserValidator,
  addUserValidationHandler,
  addUser
);

// exports
module.exports = router;
