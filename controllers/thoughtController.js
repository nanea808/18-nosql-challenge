// model imports
const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      .select("-__v")
      .then((thought) => {
        !thought ? res.status(404).json("User not found!") : res.json(thought);
      });
  },
  createThought(req, res) {
    // create thought
    Thought.create(req.body)
      // find user matching _id and push thought to user.thoughts array
      .then((thought) => {
        User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { thoughts: thought } },
          { new: true }
          // if user does not exist, err, else return user
        ).then((user) => {
          !user
            ? res.status(404).json({ message: "No user with that ID" })
            : res.json(user);
        });
      })
      // request error catching
      .catch((err) => res.status(500).json(err));
  },
  // update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : User.findOneAndUpdate({ username: thought.username }, { $pull: { thoughts: thought.id }})
      )
      .then(() => res.json({ message: "Thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
