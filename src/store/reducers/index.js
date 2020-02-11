import { combineReducers } from "redux"
import { cryptoPricesReducer } from "./cryptoPricesReducer"

export const rootReducer = combineReducers({
  cryptoPrices: cryptoPricesReducer
})
