import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";

import todos from "./reducers/todos";
import { Todos } from "./states/TodoState";

import App from "./App";

const store: Store<Todos> = createStore(todos, []);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("example"),
);
