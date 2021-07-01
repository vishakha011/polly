import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { ToastContainer } from "react-toastify";
import { either, isNil, isEmpty } from "ramda";
import { initializeLogger } from "common/logger";

import NavBar from "components/NavBar";
import Dashboard from "components/Dashboard";
import CreatePoll from "components/Polls/CreatePoll";
import ShowPoll from "components/Polls/ShowPoll";
import EditPoll from "components/Polls/EditPoll";
import PageLoader from "components/PageLoader";
import Signup from "components/Authentication/Signup";
import Login from "components/Authentication/Login";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    logger.info("Log from js-logger");
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/polls/new" component={CreatePoll} />
        <Route exact path="/polls/:id/show" component={ShowPoll} />
        <Route exact path="/polls/:id/edit" component={EditPoll} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
