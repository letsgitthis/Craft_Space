const router = require("express").Router();
const postRoutes = require("./posts");

// Exports the post routes
router.use("/posts", postRoutes);

module.exports = router;
