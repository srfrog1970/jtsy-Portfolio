const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  //
  // Find the Developer by github login ID.

  findDeveloper: function (req, res) {
    db.Developer.findOne({ developerLoginName: req.params.id })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(dbDeveloper);
        }
      });
  },

  // Update the Developer
  updateDeveloper: function (req, res) {
    console.log('in devController updateDeveloper ', req.params.id, req.body)
    db.Developer.updateOne(
      { developerLoginName: req.params.id },
      {
        $set: req.body,
      }
    )
  }
};
