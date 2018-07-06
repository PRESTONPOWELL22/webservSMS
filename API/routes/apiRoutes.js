const express = require('express')
const router = express.Router()
var csv = require('csv-parser')
var fs = require('fs')

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
        })
    })
  })

module.exports.router = router
