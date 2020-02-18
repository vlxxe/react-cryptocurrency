import {
  WS_CONNECT,
  WS_DISCONNECT,
  wsDataReceived
} from "../store/actions/cryptoPricesAction"

const socketMiddleware = () => {
  let socket = null

  const onMessage = store => msg => {
    let data = JSON.parse(msg.data)
    store.dispatch(wsDataReceived(data))
  }

  return store => next => action => {
    switch (action.type) {
      case WS_CONNECT:
        if (socket !== null) {
          socket.close()
        }

        // connect to the remote host
        socket = new WebSocket(
          "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin,ripple,bitcoin-cash,tron"
        )

        // websocket handlers
        socket.onmessage = onMessage(store)
        break

      case WS_DISCONNECT:
        if (socket !== null) {
          socket.close()
        }
        socket = null
        break

      default:
        return next(action)
    }
  }
}

export default socketMiddleware()
