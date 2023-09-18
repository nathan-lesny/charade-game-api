const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  gameName: {
    type: String,
    require: true
  },
  entries: {
    type: [],
    require: true
  },
  timeStamp: {
    type: String,
    default: Date.now()
  }
})

const Game = mongoose.model("Game", GameSchema)

module.exports = Game;