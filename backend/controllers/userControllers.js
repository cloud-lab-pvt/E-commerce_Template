const Users = require("../model/userModel");

// Get all Users
const getUsers = async (req, res) => {
  const users = await Users.find();
  res.json(users);
};

// Update User
const updateUsers = (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      user.userId = req.body.userId;
      user.name = req.body.name;
      user.email = req.body.email;
      user.phoneNo = req.body.phoneNo;
      user.address = req.body.address;
      user
        .save()
        .then(() => {
          res.send("User updated");
        })
        .catch((err) => res.status(400).json({ error: err }));
    })
    .catch((err) => res.status(400).json({ error: err }));
};
// Delete User
const deleteUsers = (req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then(() => {
      return Users.find();
    })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = { getUsers, deleteUsers, updateUsers };
