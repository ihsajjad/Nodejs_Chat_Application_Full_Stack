// get users page
const getInbox = (req, res, next) => {
  res.render("inbox", { title: "Users - Chat Application" });
};

module.exports = { getInbox };
