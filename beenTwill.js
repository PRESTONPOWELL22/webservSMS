require('dotenv').config()
const Twilio = require('twilio')

var accountSid = process.env.TWILIO_SID // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_TOKEN // Your Auth Token from www.twilio.com/console

var client = new Twilio(accountSid, authToken)

client.messages.create({
  body: 'Hey HOW ARE YOU',
  to: '+19496773222', // Text this number
  from: '+19496819184' // From a valid Twilio number
})
  .then((message) => console.log(message.sid))
