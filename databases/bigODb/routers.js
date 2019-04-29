let router = require('express').Router()
let controllers = require('./controllers.js')

router.route('/')
  .get(controllers.getBigO)
  .post(controllers.postBigO)
  .delete(controllers.clearAll)

module.exports = router