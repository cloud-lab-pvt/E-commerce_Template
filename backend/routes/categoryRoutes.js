const express = require("express");
const categoryRoutes = express.Router();

const {
  deleteCategories,
  getCategories,
  setCategory,
} = require("../controllers/categoryControllers");

// Categories

categoryRoutes.route("/").get(getCategories).post(setCategory);
categoryRoutes.route("/:id").delete(deleteCategories);

module.exports = categoryRoutes;
