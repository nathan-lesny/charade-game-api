const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
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