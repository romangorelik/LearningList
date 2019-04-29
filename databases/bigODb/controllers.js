let { BigO } = require('./schemas.js');

exports.getBigO = (req, res) => {
  BigO.find({})
       .then(response => res.send(response))
       .catch(err => res.send(err))
}

exports.postBigO = (req, res) => {
  return new BigO ({
    title: req.body.title,
    time: new Date(),
    first: req.body.first,
    second: req.body.second,
    third: req.body.third,
    fourth: req.body.fourth,
    fifth: req.body.fifth,
    sixth: req.body.sixth
  }).save()
    .then(response => res.send('bigO completely sent'))
    .catch(err => res.send(err))
}

exports.clearAll = (req, res) => {
  BigO.remove({})
        .then(response => res.send('all bigO have been cleared'))
        .catch(err => res.send(err))
}
