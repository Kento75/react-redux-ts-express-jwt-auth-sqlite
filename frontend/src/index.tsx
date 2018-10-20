import "normalize.css"
import * as React from "react"
import * as ReactDOM from "react-dom"
// tslint:disable-next-line
import "semantic-ui-css/semantic.min.css"

import { Hello } from "./components/Hello"

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
)
