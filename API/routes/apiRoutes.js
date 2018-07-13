const express = require('express')
const router = express.Router()
const csv = require('csv-parser')
const fs = require('fs')
const SMS = require('../models/SMS')
var bodyparser = require('body-parser')

router.use(bodyparser.urlencoded({ extended: false }))

// .csv routing =========================================================================================================
router.route('/upload')
  .post((req, res) => {
    if (!req.files) { return res.status(400).send('No files were uploaded.') }
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile
    console.log(sampleFile)
    sampleFile.mv('filename.csv', function (err) {
      if (err) { return res.status(500).send(err) }
      res.send('file uploaded')

      fs.createReadStream('filename.csv')
        .pipe(csv())
        .on('data', function (data) {
          console.log(data)
        })
    })
  })

// SMS Routing=========================================================================================================

// send sms from frontend form
router.route('/send/sms')
  .post((req, res) => {
    var txtMessage = req.body.message
    console.log(txtMessage)
    var number = req.body.number
    SMS.sendText(txtMessage, number)
  })

module.exports.router = router
