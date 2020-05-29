const router = require("express").Router();
const devDataController = require("../../controllers/devDataController");
console.log('5. in /routes/api/devData.js')
router.route("/").get(devDataController.updateDevData);

router.route("/active").get(devDataController.findActiveDeveloper);

console.log('5a. to /activeDevData')
router.route("/activeDevData").get(devDataController.getActiveDevData);

module.exports = router;
