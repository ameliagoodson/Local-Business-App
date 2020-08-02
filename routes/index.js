const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//OR const apiRoutes = require("./api/user-routes");??? In S's code

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
  console.log("its working"); //is working?
});

module.exports = router;
