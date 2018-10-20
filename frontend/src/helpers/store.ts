import { applyMiddleware, compose, createStore } from "redux"
import * as logger from "redux-logger"
import * as thunkMiddleware from "redux-thunk"

import rootReducer from "../reducers/rootReducer"

const loggerMiddleware = logger.createLogger();

const composeEnhancers = (window as any)
  && (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
//  rootReducer,
  applyMiddleware(
    composeEnhancers(thunkMiddleware),
    loggerMiddleware
  )
)

export default store;
