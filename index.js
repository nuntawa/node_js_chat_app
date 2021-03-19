var express=require('express');
var app=express();
var path    = require("path");

//app.use(express.static('public'));


app.get("/",(req, res)=>{
    //res.sendFile(path.join(__dirname+'/public/index.html'));
    res.send("Hello");
});

var port=process.env.PORT || 5000;
app.listen(port);



// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ "port": 80 });
// // สร้าง websockets server ที่ port 80
// wss.on('connection', function connection(ws) { // สร้าง connection

//     ws.on('message', function incoming(message) {
//     // รอรับ data อะไรก็ตาม ที่มาจาก client แบบตลอดเวลา
//         console.log('received: %s', message);
//     });
//     ws.on('close', function close() {
//     // จะทำงานเมื่อปิด Connection ในตัวอย่างคือ ปิด Browser
//         console.log('disconnected');
//     });
//     ws.send('init message to client');
//     // ส่ง data ไปที่ client เชื่อมกับ websocket server นี้
//     setInterval(() => {
//         const data = {
//             posX: Math.floor((Math.random() * 800) + 1),
//             posY: Math.floor((Math.random() * 600) + 1)
//         }
//             console.log('sending to data to client:', data)
//             ws.send(JSON.stringify(data))
//     }, 1000)

// });