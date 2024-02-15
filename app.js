// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const {
  notFoundHandler,
  defaultErrorHandler,
} = require("./middleware/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
dotenv.config();
const PORT = 3000 || process.env.PORT;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hbiibcp.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(process.env.Uri)
  .then(() => console.log("Database Connection Successfull"))
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

// 404 error handler
app.use(notFoundHandler);

// error handling
app.use(defaultErrorHandler);

// running the server
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
