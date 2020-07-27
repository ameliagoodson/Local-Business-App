const router = require("express").Router();
const emailRoutes = require("./email");
// const aboutRoutes = require("./about");

// Email routes
router.use("/email", emailRoutes);
// router.use("/about", aboutRoutes);

module.exports = router;
