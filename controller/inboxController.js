// get users page
const getInbox = (req, res, next) => {
  res.render("users", { title: "Users - Chat Application" });
};

module.exports = { getInbox };
