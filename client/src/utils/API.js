import axios from "axios";

export default {
  //

  // Send in the github user name
  getActiveDevData: function () {
    console.log('2. in API.js getActiveDevData, to routes/index.js /api/devData/activeDevData/')
    return axios.get("/api/devData/activeDevData/");
  },

  // Saves the developer data.  You will need to send in the githubID in params and any fields you want to update in the developerData field.  It will update only those you send in.

  updateDeveloper: function (id, developerData) {
    return axios.post("/api/developer/" + id, developerData);
  },

  // Call this function to find the active Developer.  You do not need to pass anything in.  If none are active, it is not setup yet.

  getActiveDeveloper: function () {
    // console.log('/src/utils/API.js  getActiveDeveloper')
    return axios.get("/api/devData/active");
  },

  // Saves the developer data.  You will need to send in the githubID in params and any fields you want to update in the developerData field (This is one to many)

  updateRepositories: function (id, repositoriesData) {
    return axios.post("/api/repositories/" + id, repositoriesData);
  },

  // Call this function to find the active Developer.  You do not need to pass anything in.  If none are active, it is not setup yet.

  getsync: function (githubID, firstName, lastName, email) {
    console.log('8. in API.js getsync (util route)', githubID)
    return axios.post("/util/sync/" + githubID, firstName, lastName, email);
  },
};
