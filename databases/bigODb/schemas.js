let mongoose = require('mongoose');
let db = require('./index.js');

let bigOSchema = mongoose.Schema({
  title: {type: String, required: true},
  time : { type : Date, default: Date.now },
  first: String,
  second: String,
  third: String,
  fourth: String,
  fifth: String,
  sixth: String
})

let BigO = mongoose.model('BigO', bigOSchema)

module.exports = {'BigO': BigO}