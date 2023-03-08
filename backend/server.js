const express = require("express");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");

const app = express();
connectDB();
app.use(cors());

app.use(express.static(path.join(__dirname, "assets")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/orders", orderRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
