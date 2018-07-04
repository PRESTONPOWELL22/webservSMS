var express = require('express')
var app = express()
var PORT = 3011 || process.env.PORT
var path = require('path')

app.use(express.static('client'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client' ))
})

app.listen(PORT, () => {
  console.log(`app listinening on ${PORT}`)
})
