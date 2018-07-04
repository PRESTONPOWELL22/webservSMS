var express = require('express')
var router = express.Router
var path = require('path')
router.use(express.static('client'))

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/views/index.html'))
})

module.exports = router
