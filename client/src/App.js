import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Developer from "./pages/Developer";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin/Signin";
import API from "./utils/API";
import DevDataContext from "./contexts/DevDataContext";
import SetupContext from "./contexts/SetupContext";

// Here is another way to set up imports.  I only did this on the about page to show how. Check out how the About pages exports.  You will need the curly brackets when importing.
// import { Layout } from "./components/Layout";

//
// devData - This is in the format of how we are reading the database.
// state is set after call to db for active developer info and repos to display
const App = () => {
  const [devData, setDevData] = useState({
    repositories: [],
    developerLoginName: "",
    developerGithubID: "",
    fname: "",
    lname: "",
    email: "",
  });
  const devDataProvider = useMemo(() => ({ devData, setDevData }), [
    devData,
    setDevData,
  ]);

  // setup - This tracks our initialization process.
  const [setup, setSetup] = useState({
    isLoadedFlag: false,
    initialized: false,
  });
  const setupProvider = useMemo(() => ({ setup, setSetup }), [setup, setSetup]);

  console.log("App.js setup.initialized: ", setup.initialized)

  // On load find active user
  useEffect(() => {
    console.log("1. App.js useEffect");
    // activeDevData is current user info + repos w/activeFlag = true
    // go to utils/API to call
    API.getActiveDevData().then((activeDevData) => {

      if (activeDevData.data) {
        console.log('7. in App.js from controller', activeDevData.data.repositories.length)
        setDevData(activeDevData.data);
        setSetup({
          isLoadedFlag: true,
          initialized: true,
        });
        // console.log('after setting state and rendering, call getsync', activeDevData.data.developerLoginName)
        // API.getsync();
        let github = activeDevData.data.developerLoginName;
        console.log('7a. after setting state and rendering, call getsync', github)
        API.getsync(github);
      } else {
        console.log('in App.js useEffect, no existing dev')
        setSetup({
          isLoadedFlag: true,
          initialized: false,
        });
      }
    });
    console.log("App.js end initial load", setup.initialized);
  }, []);
  console.log("setup.initialized", setup.initialized);
  console.log("setup.isLoadedFlag", setup.isLoadedFlag);
  return (
    <div>
      {setup.isLoadedFlag ? (
        <React.Fragment>
          <Router>
            <Switch>
              <DevDataContext.Provider value={devDataProvider}>
                <SetupContext.Provider value={setupProvider}>
                  {setup.initialized ? (
                    <Route exact path="/" component={Home} />
                  ) : (
                      <Route exact path="/" component={Signin} />
                    )}
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/Developer" component={Developer} />
                  <Route exact path="/Signin" component={Signin} />
                </SetupContext.Provider>
              </DevDataContext.Provider>
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default App;
