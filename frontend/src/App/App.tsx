import * as React from "react";
import { Redirect, Route, Router } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import LoginPage from "../components/LoginPage/LoginPage";

// Private Router Component
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

// Browser History
import { history } from "../helpers/history";

const App: React.SFC<{}> = () => (
  <>
    <Router history={history}>
      <>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Redirect to="/" />
      </>
    </Router>
  </>
);

export default App;
