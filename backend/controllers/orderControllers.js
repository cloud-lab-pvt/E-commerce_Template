const Orders = require("../model/orderModel");

// Get all Orders
const getOrders = async (req, res) => {
  const orders = await Orders.find();
  res.json(orders);
};

// Delete Order
const deleteOrders = (req, res) => {
  Orders.findByIdAndDelete(req.params.id)
    .then(() => {
      return Orders.find();
    })
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => res.status(400).json({ error: err }));
};
// Update Order
const updateOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Orders.findOneAndUpdate(
      { orderId: id },
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getOrders, deleteOrders, updateOrders };
