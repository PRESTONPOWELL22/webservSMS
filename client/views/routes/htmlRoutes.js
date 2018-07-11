const express = require('express')
const router = express.Router()
const path = require('path')
const html = { root: path.join(__dirname, '/../') }

router.route('/')
  .get((req, res) => {
    res.sendFile('landing.html', html)
  })

router.route('/tool')
  .get((req, res) => {
    res.sendFile('index.html', html)
  })

router.route('/dashboard')
  .get((req, res) => {
    res.sendFile('dashboard.html', html)
  })

router.route('/messenger')
  .get((req, res) => {
    res.sendFile('messenger.html', html)
  })

router.route('/socket')
  .get((req, res) => {
    res.sendFile('socketchat.html', html)
  })

module.exports.router = router
