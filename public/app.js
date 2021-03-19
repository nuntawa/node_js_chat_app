// ทำการเชื่อม Websocket Server ตาม url ที่กำหนด
//var connection = new WebSocket('ws://websocket.aitronic.co.th:4000')
// let host=location.origin;
// host=host.replace("http","ws");
// host=host.replace("https","ws");
// host=host.replace("5000","80");

// if(host.indexOf("80")==-1)
// {
//     host+=":80";
// }

host="ws://localhost:80"

var connection = new WebSocket(host);
connection.onopen = function () {
  // จะทำงานเมื่อเชื่อมต่อสำเร็จ
  console.log("connect webSocket");
  connection.send("Hello ABCDEF"); // ส่ง Data ไปที่ Server
};
connection.onerror = function (error) {
  console.error('WebSocket Error ' + error);
};
connection.onmessage = function (e) {
  // log ค่าที่ถูกส่งมาจาก server
  console.log("message from server: ", e.data)
  createDivElement(e.data)
};
function createDivElement(data) {
  var newDiv = document.createElement('div')
  newDiv.setAttribute("id", "myDiv");
  newDiv.innerHTML = data
  document.body.appendChild(newDiv)
}