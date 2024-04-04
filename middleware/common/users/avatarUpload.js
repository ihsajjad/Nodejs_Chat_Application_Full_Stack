const uploader = require("../../../utilities/singleUpload");

const avatarApload = (req, res, next) => {
  const upload = uploader(
    "avatar",
    ["image/jpeg", "image/png", "image/jpg"],
    1000000,
    "Only jpeg, png and jpg format allowed"
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({ errors: { avater: { msg: err.message } } });
    } else {
      next();
    }
  });
};

module.exports = avatarApload;
