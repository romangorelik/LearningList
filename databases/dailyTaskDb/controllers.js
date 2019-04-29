let { Daily } = require('./schemas.js');

exports.getDaily = (req, res) => {
  Daily.find({})
       .then(response => res.send(response))
       .catch(err => res.send(err))
}

exports.postDaily = (req, res) => {
  return new Daily ({
    dailyTask: req.body.dailyTask,
    time: new Date()
  }).save()
    .then(response => res.send('daily completely sent'))
    .catch(err => res.send(err))
}

exports.clearAll = (req, res) => {
  Daily.remove({})
        .then(response => res.send('all messages by user deleted'))
        .catch(err => res.send(err))
}

exports.clearMessage = (req, res) => {
  Daily.deleteOne({dailyTask: req.body.dailyTask})
           .then(response => res.send('deleted one'))
           .catch(err => res.send(err))
}

