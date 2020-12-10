
$(function(){
    //make connection
 var socket = io.connect('http://localhost:3000')

 //buttons and inputs
 var message = $("#message")
 var username = $("#username")
 var send_message = $("#send_message")
 var send_username = $("#send_username")
 var chatroom = $("#chatroom")
 var feedback = $("#feedback")

 
 var send_anwser = $("#send_anwser")
 var anwser = $("#anwser_message")
 var anwser_room = $("#anwser_room")

 
 //Emit message
 send_message.click(function(){
     socket.emit('new_message', {message : message.val()})
 })

 send_anwser.click(function(){
     socket.emit('new_anwser', {anwser : anwser.val()})
 })

 //Listen on new_message
 socket.on("new_message", (data) => {
     feedback.html('');
     message.val('');
     chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
 })

 //Listen on new_message
 socket.on("new_anwser", (data) => {
     feedback.html('');
     message.val('');
     anwser_room.append("<p class='message'>" + data.username + ": " + data.anwser + "</p>")
     console.log(data);
 })

 //Emit a username
 send_username.click(function(){
     socket.emit('change_username', {username : username.val()})
 })

 //Emit typing
 message.bind("keypress", () => {
     socket.emit('typing')
 })

 //Listen on typing
 socket.on('typing', (data) => {
     feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
 })

 socket.on("alert_error", (data) => {
     alert(data.message);
 })
});


