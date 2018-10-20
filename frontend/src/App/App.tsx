import * as React from "react";
import { Route, RouteComponentProps, Router } from "react-router-dom";
import { Message } from "semantic-ui-react";

import HomePage from "../components/HomePage/HomePage";
import LoginPage from "../components/LoginPage/LoginPage";

// Private Router Component
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

// Browser History
import { history } from "../helpers/history";

const App: React.SFC<{}> = () => (
  <>
    <Message error>error text</Message>
    <Router history={history}>
      <>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </>
    </Router>
  </>
);

export default App;
