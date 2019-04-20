const express = require("express");
const router = express.Router();

// User Model
const User = require("../../model/users");

// @route  GET api/users
// @desc   Get All Users
// @access Public
router.get("/", (req, res) => {
  // if weren't using routers should be /api/users
  User.find()
    .sort({ date: -1 }) //desc
    .then(users => res.json(users));
});

// @route  POST api/users
// @desc   Create an User
// @access Public
router.post("/", (req, res) => {
  const newUser = new User({
    username: req.body.username, //bodyParser enable it
    password: req.body.password,
    email: req.body.email
  });

  newUser
    .save()
    .then(user => res.json(user))
    .catch(er => res.json(er));
});

// @route  PUT api/users/:id
// @desc   Update an User
// @access Public
router.put("/:id", (req, res) => {
  let id = req.params.id;
  //{ name: req.body.name } // {new: true} return updated element
  User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(user => res.json(user))
    .catch(er =>
      res.status(404).json({
        success: false,
        parmitem: req.params.id,
        bodyitem: req.body._id
      })
    );
});

// @route  DELETE api/users/:id
// @desc   Delete an User
// @access Public
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user =>
      user.remove().then(() => res.json({ success: true, user: req.params.id }))
    )
    .catch(er => res.status(404).json({ success: false, user: req.params.id }));
});

module.exports = router;
