let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
