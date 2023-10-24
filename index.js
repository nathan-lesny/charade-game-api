const express = require('express')
const mongoose = require('mongoose/');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/charade-game", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to DataBase"))
  .catch(console.error())

const Game = require('./models/Game');
const StringToList = require('./scripts/StringToList');

//get the games from the database
app.get('/games', async (req, res) => {
  const games = await Game.find();

  res.json(games);
})

app.get('/game-by-id/:id', async (req, res) => {
  const result = await Game.findById(req.params.id)

  res.json(result);
})

// Create a new game, takes in text and array of elements
app.post('/game/new', (req, res) => {
  const game = new Game({
    gameName: req.body.gameName,
    entries: req.body.entries,
    image: req.body.image
  })

  game.save();

  res.json(game);
})

//delete game, check this for bugs!!!!!!!
app.delete('/game/delete/:id', async (req, res) => {
  const result = await Game.findByIdAndDelete(req.params.id);
  
  res.json(result);
})

//Add an element to your game. Add Implementation
app.put('/game/element/:id', async (req, res) => {
  const game = await Game.findById(req.params.id)
  const entryList = StringToList(req.body.entries);
  for(let i = 0; i < entryList.length; i++) {
    game.entries = [...game.entries, entryList[i]]
  }
  game.save();

  res.json(game);
  
})

app.listen(3001, () => console.log("started on 3001"))