var express = require('express')
var router = express.Router()

router.route('/upload')
  .post((req, res) => {
    if (!req.files) { return res.status(400).send('No files were uploaded.') }
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile
    console.log(sampleFile)
    res.send('file uploaded')
  })

module.exports.router = router
