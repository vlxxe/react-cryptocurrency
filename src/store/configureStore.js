import { createStore, applyMiddleware, compose } from "redux"
import { rootReducer } from "./reducers"
import ReactThunk from "react-thunk"
import wsMiddleware from "../middleware/websocket"

const middleware = [wsMiddleware]
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
)
