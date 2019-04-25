var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://romangorelik:romangorelik1@ds147436.mlab.com:47436/dailytask', function(err){
  if(err) console.log(err);
  console.log("connection successful");
});

module.exports = db;