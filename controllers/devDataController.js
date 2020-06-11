const db = require("../models");
const mongoose = require("mongoose");
console.log('6. in devDataController')
module.exports = {
  // Get the active developer
  findActiveDeveloper: function (req, res) {
    console.log('6a. in findActiveDeveloper')
    db.Developer.findOne({
      active: true,
    })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          return res.json(err);
        } else {
          console.log('6b. dbDeveloper (w/ all repos) in devDataController ')
          return res.json(dbDeveloper);
        }
      });
  },

  getActiveDevData: function (req, res) {
    console.log('6c. in getActiveDevData')
    db.Developer.findOne({
      active: true,
    })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          return res.json(err);
        } else {
          console.log("6d. here");
          if (dbDeveloper) {
            dbDeveloper.repositories = dbDeveloper.repositories.filter(
              (repository) => repository.activeFlag == "true"
            );
          }
          // now we have the repos with activeFlag = true
          // console.log('dbDeveloper in devDataController ', dbDeveloper.developerLoginName)
          return res.json(dbDeveloper);
        }
      });
  },

  //  When calling for "devData", we will alway need the github user id.
  updateDevData: function (req, res) {
    console.log('6e. in updateDevData')
    updateDeveloper(req.body);
    updateRepository(req.body);
  },
};

function updateDeveloper(devData) {
  console.log('6f. in updateDeveloper', devData)
  if (devData) {
    db.Repositories.updateOne(
      { developerLoginName: devData.developerLoginName },
      {
        $set: { lname: devData.lname, fname: devData.fname, email: devData.email },
      }
    )
  }
}
// TODO: Does not work.  Do not need this yet but I may need to loop through the devData.repositories and write out each individually?
function updateRepository(devData) {
  console.log('6g. in updateRespository')
  if (devData) {
    let repoDevData = {
      repoName: devData.name,
      repoDesc: devData.description,
      activeFlag: false,
      archiveFlag: false,
      deploymentLink: "",
      imageLink: "",
      html_url: devData.html_url,
      repoID: devData.id,
    };
    db.Repository.insertMany(repoDevData);
  }
}
