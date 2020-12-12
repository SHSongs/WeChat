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

getEmail = function(){
  connection.query('SELECT email FROM users', function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
}

insertName = function(name){
    var sql = 'INSERT INTO mydatabase.users (`fullname`) VALUES (?)';
    var values = [name];
    connection.query(sql, values, function(err, results, fields) {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
  
}

insertChatLog = function(message,data, username){
  var sql = 'INSERT INTO mydatabase.chat_log (message) VALUES (?)';
  var values = [message];
  connection.query(sql, values, function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });

}

insertCardInfo = function(data){
  var sql = 'INSERT INTO mydatabase.card (CardName, CardNum, CardExpirationDate, CardCVC) VALUES (?,?,?,?)';
  var values = [data.name, data.Num, data.ExpirationData, data.CVC];
  connection.query(sql, values, function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
}

GetChatLog = function(callback){
  connection.query('SELECT * FROM mydatabase.chat_log', function(err, results, fields) {
    if (err) {
      console.log(err);
    }
  
    for (var i = 0; i < results.length; i++) {
        var data = {
          message: results[i]["message"],
          username: results[i]["user_id"]
        };
        callback(data);
    }
   
    return results;
  });
}

GetProblem = function(callback){
  connection.query('SELECT * FROM mydatabase.problem_table', function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    var data = {
      ProblemTitle: results[0]["Problem_Title"],
      ProblemAnswer: results[0]["Problem_Anwser"]
    };
    callback(data);
    return results;
  });
}


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

  GetChatLog(function(data){
    io.sockets.emit('new_message', {message : data.message, username : socket.username});
  });

  GetProblem(function(data){
    socket.ProblemAnswer = data.ProblemAnswer;
    io.sockets.emit('new_problem', {ProblemTitle : data.ProblemTitle});
    console.log(data.ProblemAnswer);
  });



	//default username
	socket.username = "Anonymous"
    socket.submit_anwser = false;

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
        insertName(data.username);
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        console.log(data);
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
        insertChatLog(data.message, "000", socket.username);
    })

    socket.on('new_anwser', (data) => {
        //broadcast the new message
        console.log(data.anwser);

        if (socket.submit_anwser == false){
            io.sockets.emit('new_anwser', {anwser : data.anwser, username : socket.username});
            
            if(data.anwser == socket.ProblemAnswer){
              io.sockets.emit('card_info', {message : "정답입니다 집주소와 카드정보를 입력하시면\n IPhone 12 MAX과 Only Apple무선 충전기를 보내드립니다."});
            }

            socket.submit_anwser = true;
        }
        else{
            io.sockets.emit('alert_error', {message : "정답은 한번만 제출가능합니다."});
            return;
        }
    })
    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })

    socket.on('get_card_info', (data) => {
      insertCardInfo(data);      
    })

})
