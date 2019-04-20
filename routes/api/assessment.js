const express = require("express");
const router = express.Router();

// Product Model
const Passage = require("../../model/assessment");

// @route  GET api/assessment
// @desc   Get All Passages
// @access Public
router.get("/", (req, res) => {
  // if weren't using routers should be /api/stock
  Passage.find()
    .sort({ date: -1 }) //desc
    .then(passages => res.json(passages));
});

// get by query

router.get("/:query", function(req, res) {
  let query = req.params.query;
  Passage.find({ theme: `${query}` })
    .then(passages => res.json(passages))
    .catch(er => res.json(er));
});

// @route  POST api/assessment
// @desc   Create a Passage
// @access Public
router.post("/", (req, res) => {
  const newPassage = new Passage({
    theme: req.body.theme, //bodyParser enable it
    topic: req.body.topic,
    title: req.body.title,
    passage: req.body.passage,
    quizQuestions: req.body.quizQuestions,
    image: req.body.image
  });

  newPassage
    .save()
    .then(passage => res.json(passage))
    .catch(er => res.json(er));
});
// @route  PUT api/stock/:id
// @desc   Update a Good
// @access Public
router.put("/:id", (req, res) => {
  let id = req.params.id;
  //{ name: req.body.name } // {new: true} return updated element
  Passage.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(passage => res.json(passage))
    .catch(er =>
      res.status(404).json({
        success: false,
        parmitem: req.params.id,
        bodyitem: req.body._id
      })
    );
});
// @route  DELETE api/assessment/:id
// @desc   Delete an Passage
// @access Public
router.delete("/:id", (req, res) => {
  Passage.findById(req.params.id)
    .then(passage =>
      passage
        .remove()
        .then(() => res.json({ success: true, passage: req.params.id }))
    )
    .catch(er =>
      res.status(404).json({ success: false, passage: req.params.id })
    );
});

module.exports = router;
