let router = require('express').Router()
let controllers = require('./controllers.js')

router.route('/')
  .get(controllers.getDaily)
  .post(controllers.postDaily)
  .delete(controllers.clearAll)

module.exports = router