require('dotenv').config()
const Twilio = require('twilio')

var accountSid = process.env.TWILIO_SID // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_TOKEN // Your Auth Token from www.twilio.com/console

var client = new Twilio(accountSid, authToken)

module.exports = {
  sendText: function (txtMessage, number) {
    console.log(txtMessage, number)
    client.messages.create({
      to: number, // Text this number
      from: process.env.TWILIO_NUMBER, // From a valid Twilio number
      body: txtMessage
    })
      .then((message) => {
        console.log(message.sid)
      })
      .catch(err => console.err(err))
  }
}
