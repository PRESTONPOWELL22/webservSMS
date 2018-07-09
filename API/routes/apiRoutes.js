const express = require('express')
const router = express.Router()
const csv = require('csv-parser')
const fs = require('fs')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const SMS = require('../models/SMS')
var bodyparser = require('body-parser')
var Twilio = require('twilio')
 
// const accountSid = process.env.TWILIO_SID // Your Account SID from www.twilio.com/console
// const authToken = process.env.TWILIO_TOKEN // Your Auth Token from www.twilio.com/console

// var client = new Twilio(accountSid, authToken)
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
let messages = []

router.route('/messages')
  .get((req, res) => {
    res.send(messages)
  })

router.route('/sms') // this curently responds whatever you text twillio
  .post((req, res) => {
    messages.push(req.body.Body)
    const twiml = new MessagingResponse()

    twiml.message('The Hosts are attacking')

    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString())
  })



// send sms from frontend form
router.route('/send/sms')
  .post((req, res) => {
    var number = req.body.number
    var txtMessage = req.body.message
    SMS.sendText(txtMessage, number)
    // console.log(req.body)
  })


module.exports.router = router
