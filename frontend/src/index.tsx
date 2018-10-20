import "normalize.css"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
// tslint:disable-next-line
import "semantic-ui-css/semantic.min.css"

import App from "./App/App"
import store from "./helpers/store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
