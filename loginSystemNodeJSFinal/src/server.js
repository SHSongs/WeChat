var express = require('express');
var app = express();                // app은 express의 인스턴스
var cors = require('cors');
const port = 3001;

app.set('view engine', 'ejs')

app.use(cors());


var indexRouter = require('./routes/routtest.js');  // 루트 요청

app.use('/login', indexRouter);


//Listen on port 3001
var server = app.listen(port)

app.get("/", (req, res) => {
    res.send("server is runnning");
  });
  

//socket.io instantiation
const io = require("socket.io")(server, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});


//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')

	//default username
	socket.username = "Anonymous"

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })
      // 유저가 생성한 이벤트에 대한 처리 `on`
    socket.on("sendMessage", (message, callback) => {
    io.emit("message", { user: user.name, text: message });
        console.log(message);
    });

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
})
