const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')  // cors
const CardService = require('./services/card.service')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

let myCardService = new CardService()

// middleware
const logFunction = (request, response, next) => {
    console.log('called', request.path)
    next()
}

/* const activateCors = (request, response, next) => {
    cors()
    console.log('cors_passed')
    next()
}  */

const whitelist = ['http://127.0.0.1:4200'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
    {
        return callback(null, true)
    } else {
        console.log(whitelist)
        console.log(origin)
        callback(new Error('Not allowed by CORS'));
    }  
  }
}

app.use(cors(corsOptions));
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


  
const deckController = (req, res) => {
    res.send(myCardService.getDeck())
}

const randomizedDeckController = (req, res) => {
    res.send(myCardService.shuffleDeck())
}


const dealCardsController = (req, res) => {
    let startingDeck = myCardService.shuffleDeck();
    let deck = [startingDeck[0], startingDeck[1], startingDeck[2], startingDeck[3], startingDeck[4], startingDeck[5]]
    res.send(myCardService.dealCards(deck, 2))
}

app.get('/randomizedDeck', randomizedDeckController)

app.get('/dealCards', dealCardsController)

app.get('/deck', deckController)
// app.listen(port, () => console.log(` app listening on port ${port}!`))
http.listen(port, "127.0.0.1")




