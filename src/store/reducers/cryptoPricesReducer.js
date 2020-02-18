import {
  WS_CONNECT,
  WS_DATA_RECEIVED,
  WS_DISCONNECT
} from "../actions/cryptoPricesAction";

const initialState = {
  cryptoData: [
    { name: "bitcoin", price: null, imgName: "btc" },
    { name: "bitcoin-cash", price: null, imgName: "bch" },
    { name: "ethereum", price: null, imgName: "eth" },
    { name: "monero", price: null, imgName: "xmr" },
    { name: "litecoin", price: null, imgName: "ltc" },
    { name: "ripple", price: null, imgName: "xrp" },
    { name: "tron", price: null, imgName: "trx" }
  ]
};

export const cryptoPricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECT:
      return { ...state };

    case WS_DATA_RECEIVED:
      let newData = [...state.cryptoData];

      for (let key in action.payload) {
        newData.map(c =>
          c.name === key ? (c.price = action.payload[key]) : null
        );
      }

      return {
        ...state,
        cryptoData: [...newData]
      };

    case WS_DISCONNECT:
      return { ...state };

    default:
      return state;
  }
};
