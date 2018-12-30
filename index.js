const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')  // cors

const http = require('http').createServer(app)
const io = require('socket.io')(http)
const CardController = require('./controllers/card.controller')

let myCardController = new CardController()


// middleware
const logFunction = (request, response, next) => {
    console.log('called', request.path)
    next()
}

const whitelist = ['http://127.0.0.1:4200'];
const corsOptions = {
  credentials: true, // This is important.
  // origin: (origin, callback) => {
  //   if(whitelist.includes(origin))
  //   {
  //       return callback(null, true)
  //   } else {
  //       console.log(whitelist)
  //       console.log(origin)
  //       callback(new Error('Not allowed by CORS'));
  //   }  
  // }
  origin: (origin, callback) => {
        return callback(null, true)
  }
}

//app.use(cors(corsOptions));
app.options('*', cors()) // include before other routes
app.use(logFunction)

io.origins((origin, callback) => {
    console.log('am intrat aici', origin)
    if (origin !== 'http://127.0.0.1:4200') {
      return callback('origin not allowed', false);
    }
    callback(null, true);
  });

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
    socket.on('message', function(message){
        io.emit('message', message);
        console.log(message);
    });
  });



app.get('/randomizedDeck', myCardController.randomizedDeckController)

app.get('/dealCards', myCardController.dealCardsController)

app.get('/deck', myCardController.deckController)
// app.listen(port, () => console.log(` app listening on port ${port}!`))
http.listen(port, "127.0.0.1")




