const router = require("express").Router();
const bookRoutes = require("./books");
// const aboutRoutes = require("./about");

// Book routes
router.use("/books", bookRoutes);
// router.use("/about", aboutRoutes);

module.exports = router;
