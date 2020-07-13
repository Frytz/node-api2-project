const express = require("express");

const Comment = require("../data/db");



const router = express.Router();

router.get("/:id/comments", (req, res) => {
  Comment.findCommentById(req.params.id)
    .then((hub) => {
      res.status(200).json(hub);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving the comment" });
    });
});

router.post("/:id/comments", (req, res) => {
  Comment.insertComment(req.body)
    .then((hub) => {
      res.status(201).json(hub);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Can't make comment." });
    });
});

module.exports = router;
