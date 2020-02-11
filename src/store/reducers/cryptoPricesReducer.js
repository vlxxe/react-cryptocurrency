import {
  WS_CONNECT,
  WS_DATA_RECEIVED,
  WS_DISCONNECT
} from "../actions/cryptoPricesAction"

const initialState = {
  cryptoPriceList: [],
  cryptoData: [
    { name: "bitcoin", price: null },
    { name: "ethereum", price: null },
    { name: "monero", price: null },
    { name: "litecoin", price: null },
    { name: "ripple", price: null },
    { name: "bitcoin-cash", price: null },
    { name: "tron", price: null },
    { name: "tether", price: null }
  ],
  cryptoPriceList2: {
    bitcoin: null,
    ethereum: null,
    monero: null,
    litecoin: null
  }
}

export const cryptoPricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECT:
      return { ...state }

    case WS_DATA_RECEIVED:
      let newData = [...state.cryptoData]

      for (let key in action.payload) {
        newData.map(c =>
          c.name === key ? (c.price = action.payload[key]) : null
        )
      }

      return {
        ...state,
        cryptoData: [...newData]
      }

    case WS_DISCONNECT:
      return { ...state }

    default:
      return state
  }
}
