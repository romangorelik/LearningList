let mongoose = require('mongoose');
let db = require('./index.js');

let dailySchema = mongoose.Schema({
  dailyTask: {type: String, required: true},
  time : { type : Date, default: Date.now }
})

let Daily = mongoose.model('Favorites', dailySchema)

module.exports = {'Daily': Daily}