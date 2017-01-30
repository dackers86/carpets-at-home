
import express from 'express';
import socket from 'socket.io'

const app = express();

app.use('/', express.static('public'));

socket.listen(app);

socket.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

app.listen(process.env.PORT || 3000);
