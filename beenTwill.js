require('dotenv').config()

var accountSid = process.env.TWILIO_SID // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_TOKEN // Your Auth Token from www.twilio.com/console

var Twilio = require('twilio')
var client = new Twilio(accountSid, authToken)

client.messages.create({
  body: 'Hello from Node test 2',
  to: '+19494349389', // Text this number
  from: '+19496819184' // From a valid Twilio number
})
  .then((message) => console.log(message.sid))
