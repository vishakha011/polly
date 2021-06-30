import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { setAuthHeaders } from "apis/axios";

import { initializeLogger } from "./common/logger";
import Dashboard from "components/Dashboard";
import CreatePoll from "components/Polls/CreatePoll";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    logger.info("Log from js-logger");
    setAuthHeaders(setLoading);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About</div>} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/polls/new" component={CreatePoll}></Route>
      </Switch>
    </Router>
  );
};

export default App;
