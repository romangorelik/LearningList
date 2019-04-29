var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://romangorelik:romangorelik1@ds117311.mlab.com:17311/bigo', function(err){
  if(err) console.log(err);
  console.log("connection successful");
});

module.exports = db;