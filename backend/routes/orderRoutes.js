const express = require("express");
const orderRoutes = express.Router();

const {
  deleteOrders,
  getOrders,
  updateOrders,
} = require("../controllers/orderControllers");

// Orders

orderRoutes.route("/").get(getOrders);
orderRoutes.route("/:id").delete(deleteOrders).put(updateOrders);

module.exports = orderRoutes;
