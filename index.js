var WebSocket = require("websocket").w3cwebsocket;
const ws = new WebSocket("wss://stream.binance.com:9443/ws");
const msg = {
  method: "SUBSCRIBE",
  params: ["btcusdt@depth", "ethusdt@depth"],
  id: 1,
};
var graphEth = [];
var graphBtc = [];
ws.onopen = () => {
  ws.send(JSON.stringify(msg));
};
ws.onmessage = async (e) => {
  const data = e;
  const Data = await JSON.parse(e.data);
  console.log(Data);
  var y = Data.b;
};
