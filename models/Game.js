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
  image: {
    type: String,
    default: "/Place-holder-mg.png"
  },
  timeStamp: {
    type: String,
    default: Date.now()
  }
})

const Game = mongoose.model("Game", GameSchema)

module.exports = Game;