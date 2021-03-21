var express=require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    //origins: ["https://websocket.aitronic.co.th/carpool/","https://www.aitronic.co.th/carpool/","https://www.localhost/carpool/","http://localhost:3000"],
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {

  socket.on('send_data', obj => {


    // obj={
    //   action:"",
    //   user_id:"",
    //   driver_id:"",
    //   is_back:""
    // }
    console.log(obj);
    io.emit('send_data', obj);

  });


});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
