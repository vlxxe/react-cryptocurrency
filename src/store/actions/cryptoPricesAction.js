export const WS_CONNECT = "SOCKETS_CONNECT"
export const WS_DISCONNECT = "WS_DISCONNECT"
export const WS_DATA_RECEIVED = "SOCKETS_DATA_RECEIVED"

export const wsConnect = () => {
  return { type: WS_CONNECT }
}

export const wsDisconnect = () => {
  return { type: WS_DISCONNECT }
}
export const wsDataReceived = data => {
  return { type: WS_DATA_RECEIVED, payload: data }
}
