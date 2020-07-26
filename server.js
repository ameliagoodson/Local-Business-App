const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const logger = require("morgan");
const passport = require("passport");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3001; //change to 5001?

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true })); //should be true or false? Is false on other
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));
// Connect to the Mongo Database (DB Config)
const MONGODB_URI = "";
const mongoURI = "mongodb://localhost/login";

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI || mongoURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use(routes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
