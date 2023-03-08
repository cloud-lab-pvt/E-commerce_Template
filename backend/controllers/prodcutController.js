const Products = require("../model/productModel");

// Get all Products
const getProducts = async (req, res) => {
  const products = await Products.find()
    .select("productId name category description price image")
    .lean();
  res.json(products);
};

// Post order
const setProduct = async (req, res) => {
  const productId = req.body.productId;
  const category = req.body.category;
  const description = req.body.description;
  const price = req.body.price;
  const name = req.body.name.toLowerCase();
  const image = req.file.filename;

  // Check if product with same name and category already exists
  const existingProduct = await Products.findOne({
    name: { $regex: new RegExp(`^${name}$`, "i") },
    category,
  });
  if (existingProduct) {
    console.log("Product already exists");
    return res.json({ error: "Product already exists" });
  } else {
    const newProduct = new Products({
      name,
      productId,
      category,
      price,
      description,
      image,
    });
    newProduct
      .save()
      .then(() => {
        console.log(req.file);
        res.send(`Product Added ${image}`);
      })
      .catch((err) => res.status(400).json({ error: err }));
  }
};

// Update User
const updateProducts = (req, res) => {
  Products.findById(req.params.id)
    .then((product) => {
      product.productId = req.body.productId;
      product.category = req.body.category;
      product.description = req.body.description;
      product.price = req.body.price;
      product.name = req.body.name;

      if (req.file) {
        product.image = req.file.filename;
      }
      product
        .save()
        .then(() => {
          res.send("Product updated");
        })
        .catch((err) => res.status(400).json({ error: err }));
    })
    .catch((err) => res.status(400).json({ error: err }));
};
// Delete User
const deleteProducts = (req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(() => {
      return Products.find();
    })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = { getProducts, deleteProducts, updateProducts, setProduct };
