const path = require("path");
const router = require("express").Router();

// Initialize API routes.
const apiRoutes = require("./api");
const utilRoutes = require("../utils");

// NOTE: The only  routes I have seen is a "api", "html" and "util" routes.  Since we are using react, we do not need html routes?
console.log('3. in backend routes/index.js')
// Call API routes.
router.use("/api", apiRoutes);

// Call utils routes.  The only currently here is the "synch" (to synch github with your database)
router.use("/util", utilRoutes);

// If no API routes are hit, send the React app (landing page)
router.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/src/index.html"))
);

module.exports = router;
