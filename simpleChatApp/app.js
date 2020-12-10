const express = require('express')
const app = express()


var mysql = require('mysql');


require('dotenv').config()

console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS);

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});

connection.query('SELECT email FROM users', function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });


//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))


//routes
app.get('/', (req, res) => {
	res.render('index')
})

//Listen on port 3000
var server = app.listen(3000)



//socket.io instantiation
const io = require("socket.io")(server)


//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')

	//default username
	socket.username = "Anonymous"
    socket.submit_anwser = false;

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        console.log(data);
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    socket.on('new_anwser', (data) => {
        //broadcast the new message
        console.log(data.anwser);

        if (socket.submit_anwser == false){
            io.sockets.emit('new_anwser', {anwser : data.anwser, username : socket.username});
            
            socket.submit_anwser = true;
        }
        else{
            io.sockets.emit('alert_error', {message : "정답은 한번만 제출가능합니다."});
        }
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })

})
