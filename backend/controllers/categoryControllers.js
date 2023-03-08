const Categories = require("../model/categoryModel");

// Get all categories
const getCategories = async (req, res) => {
  const categories = await Categories.find();
  res.json(categories);
};

// Post category
const setCategory = async (req, res) => {
  const name = req.body.name.toLowerCase();

  try {
    const existingCategory = await Categories.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = new Categories({ name });

    await newCategory.save();

    const categories = await Categories.find();

    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete category
const deleteCategories = (req, res) => {
  Categories.findByIdAndDelete(req.params.id)
    .then(() => {
      return Categories.find();
    })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = { getCategories, setCategory, deleteCategories };
