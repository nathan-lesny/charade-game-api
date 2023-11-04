const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  sessionName: {
    type: String,
    require: true
  },
  entries: {
    type: [],
    require: true
  },
  deviceConnected: {
    type: Boolean,
    default: false
  },
  timeStamp: {
    type: String,
    default: Date.now()
  }
})

const Session = mongoose.model("Session", SessionSchema)

module.exports = Session;
