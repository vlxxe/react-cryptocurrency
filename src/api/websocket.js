export class CryptoWs {
  ws = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin")
  onOpen() {
    this.ws.onopen = () => {
      console.log("WS Open!")
    }
  }
}
export const webs = {
  ws: new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin"),
  onOpen() {
    this.ws.onopen = () => {
      console.log("WS Open!")
    }
  }
}
