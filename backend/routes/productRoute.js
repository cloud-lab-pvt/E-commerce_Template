const express = require("express");
const productRoutes = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../Website/src/assets/products");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });

const updateProductUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../../Website/src/assets/products");
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const filename = path.basename(file.originalname, ext);
      cb(null, `${filename}-${uuidv4()}${ext}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

const {
  getProducts,
  deleteProducts,
  updateProducts,
  setProduct,
} = require("../controllers/prodcutController");

// Products
productRoutes.route("/").get(getProducts);
productRoutes.route("/:id").delete(deleteProducts);
productRoutes
  .route("/update/:id")
  .post(updateProductUpload.single("image"), updateProducts);
productRoutes.route("/new").post(upload.single("image"), setProduct);

// Route for accessing uploaded images
productRoutes.get("/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.resolve(
    __dirname,
    "../../../Website/src/assets/products",
    imageName
  );
  res.sendFile(imagePath);
});

module.exports = productRoutes;
