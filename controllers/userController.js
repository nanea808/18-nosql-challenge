// model imports
const { Thought, User } = require("../models");

module.exports = {
  // database query methods (to be used in api routes)

  /* USER */

  // find all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // find user using req.param.id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
      .select("-__v")
      .then((user) => {
        !user ? res.status(404).json("User not found!") : res.json(user);
      });
  },
  // create user using req.param.id
  createUser(req, res) {},
  // delete user using req.param.id. bonus: delete thoughts related to user
  removeUser(req, res) {},
};
