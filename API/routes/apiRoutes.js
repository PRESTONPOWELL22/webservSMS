const express = require('express')
const router = express.Router()
const csv = require('csv-parser')
const fs = require('fs')
const MessagingResponse = require('twilio').twiml.MessagingResponse

var csvData = []

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
          csvData.push(data)
          console.log(csvData[0])
        })
    })
  })

router.route('/sms')
  .post((req, res) => {
    console.log(req.body.Body)
    const twiml = new MessagingResponse()

    twiml.message('Get Fucked!')

    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString())
  })

module.exports.router = router
