const bcrypt = require("bcrypt");
const User = require("../models/People");

// get users page
const getUsers = (req, res, next) => {
  res.render("users", { title: "Users - Chat Application" });
};

// add user
const addUser = async (req, res, next) => {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (req.files && req.files.length > 0) {
    console.log("have file");
    newUser = await User.create({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = await User.create({ ...req.body, password: hashedPassword });
  }

  // save user or send response
  try {
    if (newUser)
      return res.status(200).json({ message: "User was added successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: { common: { msg: "Unknown error occured!" } } });
  }
};
module.exports = { getUsers, addUser };
