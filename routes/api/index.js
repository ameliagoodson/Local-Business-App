const router = require("express").Router();
const bookRoutes = require("./books");
const emailRoutes = require("./email");
// const aboutRoutes = require("./about");

// Book routes
router.use("/books", bookRoutes);
router.use("/email", emailRoutes);
// router.use("/about", aboutRoutes);

module.exports = router;
